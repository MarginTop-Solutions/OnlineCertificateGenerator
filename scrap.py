import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

url = "https://nztnz.000webhostapp.com/text-editor/Icons/"
response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    # lists = ['hexagon', 'line', 'pentagon', 'square', 'star', 'textarea','trash', 'triangle', 'ungroup', 'upload', 'x-lg']
    # Find all links with .svg extension and starting with a specific prefix
    lists = ['front']
    for prefix in lists:

        svg_links = [
            urljoin(url, link['href']) 
            for link in soup.find_all('a', href=True) 
            if link['href'].endswith('.svg') and link['href'].startswith(prefix)
        ]

        # Create a directory to save the downloaded files
        os.makedirs("svg_files", exist_ok=True)

        # Download and save each .svg file
        for svg_link in svg_links:
            response = requests.get(svg_link)
            if response.status_code == 200:
                # Extract the file name from the URL
                file_name = os.path.join("svg_files", os.path.basename(svg_link))
                
                # Save the content to a local file
                with open(file_name, 'wb') as svg_file:
                    svg_file.write(response.content)
                print(f"Downloaded: {file_name}")
            else:
                print(f"Failed to download {svg_link}. Status code: {response.status_code}")
else:
    print(f"Failed to retrieve the page. Status code: {response.status_code}")
