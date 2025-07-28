#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re
import os
from datetime import datetime

def update_sitemap():
    """自动更新sitemap.xml中的lastmod日期"""
    
    sitemap_file = 'sitemap.xml'
    
    if not os.path.exists(sitemap_file):
        print("❌ 错误: 找不到 sitemap.xml 文件")
        return
    
    # 获取当前日期
    today = datetime.now().strftime("%Y-%m-%d")
    
    print(f"正在更新sitemap.xml的lastmod日期到: {today}")
    
    try:
        # 读取sitemap文件
        with open(sitemap_file, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # 替换所有的lastmod日期
        # 匹配 <lastmod>日期</lastmod> 的模式
        pattern = r'<lastmod>\d{4}-\d{2}-\d{2}</lastmod>'
        replacement = f'<lastmod>{today}</lastmod>'
        
        updated_content = re.sub(pattern, replacement, content)
        
        # 写回文件
        with open(sitemap_file, 'w', encoding='utf-8') as file:
            file.write(updated_content)
        
        print(f"✅ Sitemap更新完成！日期: {today}")
        print("🌐 建议同时提交sitemap到搜索引擎控制台")
        
    except Exception as e:
        print(f"❌ 更新失败: {e}")

def validate_sitemap():
    """验证sitemap.xml的基本格式"""
    
    sitemap_file = 'sitemap.xml'
    
    if not os.path.exists(sitemap_file):
        print("❌ sitemap.xml 文件不存在")
        return False
    
    try:
        with open(sitemap_file, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # 基本验证
        if '<?xml version="1.0"' not in content:
            print("❌ 缺少XML声明")
            return False
        
        if '<urlset' not in content:
            print("❌ 缺少urlset根元素")
            return False
        
        if '</urlset>' not in content:
            print("❌ urlset元素未正确关闭")
            return False
        
        # 统计URL数量
        url_count = content.count('<url>')
        print(f"✅ Sitemap验证通过！包含 {url_count} 个URL")
        
        return True
        
    except Exception as e:
        print(f"❌ 验证失败: {e}")
        return False

if __name__ == "__main__":
    print("🗺️  Sitemap管理工具")
    print("=" * 30)
    
    # 验证现有sitemap
    if validate_sitemap():
        # 更新sitemap
        update_sitemap()
    else:
        print("请先修复sitemap.xml文件中的问题") 