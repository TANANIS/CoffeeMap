 

##CoffeeMap - Coffee Venue Map
#Project Description
CoffeeMap is an interactive map showcasing coffee-related venues around the world, using OpenStreetMap as the map service. The purpose of this project is to help coffee enthusiasts explore various coffee culture-related venues, such as coffee exhibitions, coffee competitions, coffee factories, and professional training centers. Users can view the locations of each venue on the map, along with detailed information about the venue's offerings and events, immersing them in the diversity of coffee culture.

#Installation and Usage
Clone or download this repository:

After extracting the files, navigate to the folder, which contains the HTML, CSS, and JS files.

Open the index.html file to view the coffee venue map in your browser.

To modify the map's features or styles, edit the corresponding CSS and JS files.

#Features
Interactive Map: Users can pan, zoom, and view the locations of coffee culture venues around the world.
Venue Information: Each venue's marker provides basic details such as name, address, description, and event information.
Search Functionality: Users can search for specific coffee venues by keywords.
Categorized Markers: Venues are categorized into different types (e.g., coffee exhibitions, coffee factories, coffee training centers).
#Technologies and Tools
HTML: For the structure of the website.
CSS: For styling and layout of the website.
JavaScript: For the interactive map functionality and search features.
OpenStreetMap: For the map display and location markers.
Leaflet.js: A JavaScript library for loading and manipulating OpenStreetMap data.

### 咖啡地圖頁面內容結構

### 區域一：地圖區域

- **靜態地圖**:
    - 顯示全球咖啡產地國家的地圖，以便用戶可視化不同產地。
    - 地圖應該是背景圖片，標示出各主要咖啡產地的位置信息。
- **互動按鈕**:
    - 每個咖啡產地國家都是一個按鈕，點擊後將展示該地的咖啡品種與特色。
    - 按鈕應包含簡短的文字描述，如「哥倫比亞」或「埃塞俄比亞」，並有明顯的視覺標示（如顏色或圖標）。
    - 點開展示後將會顯示按鈕，每個安紐皆可導往商品區域(localhost/language/Product/Details?id)並依照國家更改網址ID。
    - 點擊按鈕後，應顯示一個空的 DIV 區域，該區域將填充該產地的咖啡品種、特色及相應的圖片，並可切換卡片查看不同豆類信息。
    - **咖啡品種特色展示**: 包括品種的名稱、風味描述、最佳沖泡方式等。
    
    ---
    

### 區域二：豆類區域

- **豆類分類展示**:
    - **表格展示**:
        - 使用表格列出不同種類的咖啡豆，包含以下欄位：
            - **豆類名稱**: 咖啡豆的名稱。
            - **產地**: 咖啡豆的來源國或地區。
            - **特點**: 描述該豆類的風味特徵（如酸度、甜度、香氣等）。
            - **最佳沖泡方式**: 提供推薦的沖泡方法（如法式壓濾、手沖等）。
    - **卡片形式展示**:
        - 每種咖啡豆都有一個可點擊的卡片，點擊後展示該咖啡豆的詳細資訊。
        - 卡片內容可以包括：
            - **豆類圖片**: 吸引人的咖啡豆或飲品照片。
            - **詳細描述**: 更深入的風味描述和背景故事。
            - **沖泡推薦**: 具體的沖泡配方或步驟。
