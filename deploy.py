#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import os
import subprocess
from datetime import datetime

def update_version():
    """更新HTML文件中的版本号"""
    new_version = datetime.now().strftime("%Y%m%d%H%M%S")
    print(f"🔄 正在更新版本号到: {new_version}")
    
    try:
        with open('index.html', 'r', encoding='utf-8') as file:
            content = file.read()
        
        pattern = r'\?v=\d+'
        replacement = f'?v={new_version}'
        updated_content = re.sub(pattern, replacement, content)
        
        with open('index.html', 'w', encoding='utf-8') as file:
            file.write(updated_content)
        
        print(f"✅ 版本号更新完成: {new_version}")
        return True
        
    except Exception as e:
        print(f"❌ 版本号更新失败: {e}")
        return False

def update_sitemap():
    """更新sitemap.xml中的lastmod日期"""
    today = datetime.now().strftime("%Y-%m-%d")
    print(f"🗺️  正在更新sitemap日期到: {today}")
    
    try:
        if not os.path.exists('sitemap.xml'):
            print("⚠️  警告: 找不到 sitemap.xml 文件")
            return False
        
        with open('sitemap.xml', 'r', encoding='utf-8') as file:
            content = file.read()
        
        pattern = r'<lastmod>\d{4}-\d{2}-\d{2}</lastmod>'
        replacement = f'<lastmod>{today}</lastmod>'
        updated_content = re.sub(pattern, replacement, content)
        
        with open('sitemap.xml', 'w', encoding='utf-8') as file:
            file.write(updated_content)
        
        print(f"✅ Sitemap更新完成: {today}")
        return True
        
    except Exception as e:
        print(f"❌ Sitemap更新失败: {e}")
        return False

def git_status():
    """检查Git状态"""
    try:
        result = subprocess.run(['git', 'status', '--porcelain'], 
                              capture_output=True, text=True, check=True)
        
        if result.stdout:
            print("📝 检测到以下文件有更改:")
            for line in result.stdout.strip().split('\n'):
                print(f"   {line}")
            return True
        else:
            print("📋 工作目录是干净的，没有待提交的更改")
            return False
            
    except subprocess.CalledProcessError:
        print("⚠️  无法检查Git状态（可能不是Git仓库）")
        return False
    except FileNotFoundError:
        print("⚠️  Git命令未找到")
        return False

def show_summary():
    """显示部署摘要"""
    print("\n" + "="*50)
    print("🚀 部署摘要")
    print("="*50)
    print("✅ 缓存版本号已更新")
    print("✅ Sitemap日期已更新") 
    print("🌐 建议下一步操作:")
    print("   1. 测试网站功能是否正常")
    print("   2. 提交代码到Git仓库")
    print("   3. 部署到生产环境")
    print("   4. 提交sitemap到搜索引擎")
    print("="*50)

def main():
    """主函数"""
    print("🚀 开始部署流程...")
    print("=" * 30)
    
    # 检查Git状态
    has_changes = git_status()
    print()
    
    # 更新版本号
    version_success = update_version()
    print()
    
    # 更新sitemap
    sitemap_success = update_sitemap()
    print()
    
    # 显示结果
    if version_success and sitemap_success:
        show_summary()
        print("\n🎉 部署准备完成！请刷新浏览器查看效果。")
    else:
        print("\n❌ 部署过程中出现错误，请检查上述日志。")
        return 1
    
    return 0

if __name__ == "__main__":
    exit(main()) 