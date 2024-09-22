#!/usr/bin/env python3

import os

def main():
    output_file = 'all_files.txt'
    start_dir = './entrypoints'

    with open(output_file, 'w', encoding='utf-8') as out_f:
        for root, _, files in os.walk(start_dir):
            for filename in files:
                file_path = os.path.join(root, filename)
                rel_path = os.path.relpath(file_path, start_dir)
                out_f.write(f"{rel_path}\n")
                try:
                    with open(file_path, 'r', encoding='utf-8') as in_f:
                        content = in_f.read()
                        out_f.write(content + '\n')
                except Exception as e:
                    print(f"Error reading file {file_path}: {e}")

if __name__ == '__main__':
    main()
