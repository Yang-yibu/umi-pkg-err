#! /bin/bash

while getopts c:n: opt; do
  case $opt in
  c)
    echo "-c ---- $OPTARG"
    code=$OPTARG
    ;;
  n)
    echo "-n ---- $OPTARG"
    name=$OPTARG
    ;;
  ?)
    echo "$opt is an invalid option"
    ;;
  esac
done

if [ -z "$code" ]; then
  read -r -p "请输入系统标识：" code
fi
if [ -z "$name" ]; then
  read -r -p "请输入系统名称：" name
fi

sysCode=$code
sysName=$name

echo "系统名称 ==> $sysCode"
echo "系统名称 ==> $sysName"

baseDir=$(pwd)
echo "运行目录 ==> $baseDir"

echo "创建系统目录 ===="
cd "$baseDir" || exit 0
pageDir="src/client-$sysCode/pages/IndexExp"
mkdir -p "$pageDir"
cd "$pageDir" || exit 0
pwd
echo "创建系统页面 ===="
cat >index.tsx <<_EOF_
import React from 'react';
import InitCmp from "@/components/InitCmp";
import * as InitCmpLocal from "../../components/InitCmp";

const IndexCmp: React.FC = function (props) {
  return (
    <div>
      <p>当前页菜单名称：{(props as any).route?.name}</p>
      <InitCmp/>
      <InitCmpLocal.default sysName={'$sysName'} />
    </div>
  );
};

export default IndexCmp;
_EOF_

if [ -f "$baseDir/$pageDir/index.tsx" ]; then
  echo "页面文件已生成！"
else
  echo "$baseDir/$pageDir/index.tsx"
  echo "页面文件生成失败！"
  exit 0
fi

echo "创建系统组件目录 ===="
cd "$baseDir" || exit 0
pageDir="src/client-$sysCode/components/InitCmp"
mkdir -p "$pageDir"
cd "$pageDir" || exit 0
pwd
echo "创建系统组件页面 ===="
cat >index.tsx <<_EOF_
import React from "react";

interface InitCmpProps {
  /** 系统名称 */
  sysName: string
}
const InitCmp: React.FC<InitCmpProps> = function (props) {
  return (<div>系统 { props.sysName || '无名称' } 独有组件库组件</div>);
}

export default InitCmp;
_EOF_

if [ -f "$baseDir/$pageDir/index.tsx" ]; then
  echo "页面文件已生成！"
else
  echo "$baseDir/$pageDir/index.tsx"
  echo "页面文件生成失败！"
  exit 0
fi

echo "创建权限文件 ===="
cd "$baseDir" || exit 0
pageDir="src/client-$sysCode"
# mkdir -p "$pageDir"
cd "$pageDir" || exit 0
pwd
echo "创建权限文件 ===="
cat >access.ts <<_EOF_
import type { IAccessParams, IAccessReturn } from '@/access';

/** $sysName 权限 */
export default function access(initialState: IAccessParams[0]): IAccessReturn {
  const { currentUser } = initialState ?? {};

  return {
    'mockPageAccKey': true,
  };
}
_EOF_

if [ -f "$baseDir/$pageDir/access.ts" ]; then
  echo "页面文件已生成！"
else
  echo "$baseDir/$pageDir/access.ts"
  echo "页面文件生成失败！"
  exit 0
fi


cd "$baseDir/src" || exit 0
echo "进入权限目录: $(pwd)";
sed -i.bak "/\/\*importAccess\*\//i\import ${sysCode}Access from '@/client-${sysCode}/access';" access.ts
sed -i.bak "/\/\*mergeAccess\*\//i\  ...${sysCode}Access(initialState)," access.ts


echo "创建路由目录 ===="
cd "$baseDir" || exit 0
pageDir="config/routes/$sysCode"
mkdir -p "$pageDir"
cd "$pageDir" || exit 0
echo "创建路由页面 ===="
cat >index.ts <<_EOF_
import { IRoutePro } from '@/typings/route';

/** ${sysName}路由 */
const routes: IRoutePro[] = [
  { path: '/', redirect: '/${sysCode}-index-exp' },
  {
    name: '${sysName}首页',
    icon: 'table',
    path: '/${sysCode}-index-exp',
    component: '@/client-${sysCode}/pages/IndexExp',
    access: 'mockPageAccKey'
  },
];

export default routes;
_EOF_

if [ -f "$baseDir/$pageDir/index.ts" ]; then
  echo "页面文件已生成！"
else
  echo "$baseDir/$pageDir/index.ts"
  echo "页面文件生成失败！"
  exit 0
fi

cd "$baseDir/config/routes" || exit 0
echo "进入路由目录: $(pwd)";
sed -i.bak "/\/\*importRoutes\*\//i\import ${sysCode}Routers from './${sysCode}/index';" index.ts
sed -i.bak "/\/\*mergeRoutes\*\//i\  ...${sysCode}Routers," index.ts

