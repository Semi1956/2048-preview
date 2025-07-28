#!/bin/bash

# 生成新的版本号（基于当前时间戳）
NEW_VERSION=$(date +%Y%m%d%H%M%S)

echo "正在更新版本号到: $NEW_VERSION"

# 更新index.html中的版本号
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' "s/\?v=[0-9]\{1,\}/\?v=$NEW_VERSION/g" index.html
else
    # Linux
    sed -i "s/\?v=[0-9]\{1,\}/\?v=$NEW_VERSION/g" index.html
fi

echo "版本号更新完成！新版本: $NEW_VERSION"
echo "请刷新浏览器以查看最新更新。" 