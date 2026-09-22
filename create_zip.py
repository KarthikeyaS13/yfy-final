import zipfile
import os

zip_path = 'yfy-final.zip'

# Remove old files if they exist to avoid confusion
for old_file in ['yfy-final.zip', 'yfy-production.zip', 'yfy-production.tar.gz']:
    if os.path.exists(old_file): 
        os.remove(old_file)

with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk('.'):
        if 'node_modules' in dirs: dirs.remove('node_modules')
        if '.next' in dirs: dirs.remove('.next')
        if '.git' in dirs: dirs.remove('.git')
        
        for file in files:
            if file.endswith('.zip') or file.endswith('.tar.gz') or file == 'create_zip.py': 
                continue
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, '.')
            zipf.write(file_path, arcname)

print('Zip file yfy-final.zip created successfully!')
