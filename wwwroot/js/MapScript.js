$(document).ready(function() {
    // 咖啡品種資料庫(MAP儲存區)
    const coffeeData = {
        colombia: {
            varieties: [
                {
                    name: '阿拉比卡',
                    description: '風味柔和，酸度適中，常用於手沖。\n風味柔和，酸度適中，常用於手沖。\n風味柔和，酸度適中，常用於手沖。',
                    brewingMethod: '手沖',
                    image: '.\\Resouce\\CofPodExp.png' 
                },
                {
                    name: '羅布斯塔',
                    description: '苦味重，咖啡因高，適合濃縮咖啡。\n苦味重，咖啡因高，適合濃縮咖啡。\n苦味重，咖啡因高，適合濃縮咖啡。',
                    brewingMethod: '濃縮',
                    image: '.\\Resouce\\CofPodExp.png' 
                }
            ]
        },
        ethiopia: {
            varieties: [
                {
                    name: '耶加雪夫',
                    description: '果香濃郁，帶有花香氣息。\n果香濃郁，帶有花香氣息。\n果香濃郁，帶有花香氣息。',
                    brewingMethod: '冷萃',
                    image: '.\\Resouce\\CofPodExp.png' 
                },
                {
                    name: '哈拉爾',
                    description: '芳香獨特，風味清新。\n芳香獨特，風味清新。\n芳香獨特，風味清新。',
                    brewingMethod: '手沖',
                    image: '.\\Resouce\\CofPodExp.png' 
                }
            ]
        },
        brazil: {
            varieties: [
                {
                    name: '巴西咖啡豆',
                    description: '口感平衡，低酸度，常用於混合咖啡。\n口感平衡，低酸度，常用於混合咖啡。\n口感平衡，低酸度，常用於混合咖啡。',
                    brewingMethod: '法式壓濾',
                    image: '.\\Resouce\\CofPodExp.png' 
                },
                {
                    name: '聖保羅咖啡豆',
                    description: '甜度高，帶有巧克力風味。\n甜度高，帶有巧克力風味。\n甜度高，帶有巧克力風味。',
                    brewingMethod: '手沖',
                    image: '.\\Resouce\\CofPodExp.png' 
                }
            ]
        },
        kenya: {
            varieties: [
                {
                    name: '肯亞AA',
                    description: '酸度明亮，風味豐富，常見於精品咖啡。\n酸度明亮，風味豐富，常見於精品咖啡。\n酸度明亮，風味豐富，常見於精品咖啡。',
                    brewingMethod: '手沖',
                    image: '.\\Resouce\\CofPodExp.png' 
                },
                {
                    name: '肯亞工廠咖啡豆',
                    description: '強烈的果香與花香，適合冷萃。\n強烈的果香與花香，適合冷萃。\n強烈的果香與花香，適合冷萃。',
                    brewingMethod: '冷萃',
                    image: '.\\Resouce\\CofPodExp.png' 
                }
            ]
        },
        hawaii: {
            varieties: [
                {
                    name: '科納咖啡豆',
                    description: '甜美且滑順，帶有堅果風味，咖啡愛好者的最愛。',
                    brewingMethod: '法式壓濾',
                    image: '.\\Resouce\\CofPodExp.png' 
                },
                {
                    name: '夏威夷豆',
                    description: '獨特的風味，適合單品沖泡。',
                    brewingMethod: '手沖',
                    image: '.\\Resouce\\CofPodExp.png' 
                }
            ]
        },
        taiwan: {
            varieties: [
                {
                    name: '阿里山咖啡豆',
                    description: '高海拔生長，酸度適中，風味清新。',
                    brewingMethod: '手沖',
                    image: '.\\Resouce\\CofPodExp.png' 
                },
                {
                    name: '東方美人咖啡豆',
                    description: '獨特的花香與果香，適合細膩的沖泡。',
                    brewingMethod: '冷萃',
                    image: '.\\Resouce\\CofPodExp.png' 
                }
            ]
        }
    };

    // 顯示指定國家的咖啡資訊(MAPPIN點開後)
    window.showCoffeeInfo = function(country) {
        $('#coffee-info').empty(); // 清空資訊區域

        // 檢查該國家的咖啡品種
        if (coffeeData[country]) {
            const row = $('<div class="row">'); // 創建一個行元素
            
            // 遍歷咖啡豆品種
            $.each(coffeeData[country].varieties, function(index, variety) {
                const varietyCard = `
                    <div class="col-md-6 mb-3"> <!-- 使用 col-md-6 實現2x2顯示 -->
                        <div class="variety-card border p-3">
                            <h4>${variety.name}</h4>
                            <img src="${variety.image}" alt="${variety.name}" style="max-width: 150px; height: auto;" class="mb-2">
                            <p>${variety.description}</p>
                            <p><strong>最佳沖泡方式:</strong> ${variety.brewingMethod}</p>
                        </div>
                    </div>
                `;
                row.append(varietyCard); // 將卡片添加到行中
            });

            $('#coffee-info').append(row); // 將行添加到顯示區域
        } else {
            $('#coffee-info').append('<p>無可用的咖啡品種資訊。</p>'); // 無資料時顯示提示
        }
    };
});
