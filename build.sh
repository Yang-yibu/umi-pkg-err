#!/bin/bash

# FLAG_STR="umi build"
FLAG_STR="Images and other types of assets omitted"

echo "============= 开始编译 ============="
nohup npm run build > ./build.log 2>&1 &

echo "========== 检测是否成功 =========="
while [ true ]; do
  echo "查找成功标志: [$FLAG_STR]"

  check_results=`grep "$FLAG_STR" ./build.log`
  echo "command(npm run build) results are: [$check_results]"
  if [[ $check_results =~ $FLAG_STR ]]; then
    echo "构建成功！"
    jobs
    kill %1;
    # exit 0;
    break;
  elif [[ `grep "Error: build failed" ./build.log` =~ 'Error: build failed' ]]; then
    # TODO: 待优化监测结果方式
    echo '构建失败！'
    jobs
    kill %1;
    echo "========== 输出构建日志 =========="
    cat ./build.log
    exit 1;
  else
    jobs
    echo "未找到构建成功标志，继续检测中。。。！"
  fi

  sleep 10;
done
echo "========== 检测是否成功 END =========="

echo "========== 输出构建日志 =========="
cat ./build.log
echo "========== 输出构建日志 END =========="

