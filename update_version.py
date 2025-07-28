#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import time
from datetime import datetime

def update_version():
    """自动更新HTML文件中的版本号"""
    
    # 生成新的版本号（基于当前时间戳）
    new_version = datetime.now().strftime("%Y%m%d%H%M%S")
    
    print(f"正在更新版本号到: {new_version}")
    
    # 读取HTML文件
    try:
        with open('index.html', 'r', encoding='utf-8') as file:
            content = file.read()
        
        # 替换版本号
        # 匹配 ?v= 后面跟着数字的模式
        pattern = r'\?v=\d+'
        replacement = f'?v={new_version}'
        
        updated_content = re.sub(pattern, replacement, content)
        
        # 写回文件
        with open('index.html', 'w', encoding='utf-8') as file:
            file.write(updated_content)
        
        print(f"✅ 版本号更新完成！新版本: {new_version}")
        print("🔄 请刷新浏览器以查看最新更新。")
        
    except FileNotFoundError:
        print("❌ 错误: 找不到 index.html 文件")
    except Exception as e:
        print(f"❌ 更新失败: {e}")

if __name__ == "__main__":
    update_version() 