// 模擬電車電池 30 天內的健康度變化（SOH %，介於 92% ~ 100% 之間）
const batteryHealthData = [98.5, 98.0, 97.2, 95.8, 96.0, 94.8, 95.0];

function drawBatteryTrend(data) {
  const polyline = document.querySelector('.chart-container polyline');
  
  // 圖表繪圖區域座標範圍
  const xMin = 50, xMax = 520;
  const yMin = 180; // 代表 92%
  const yMax = 20;  // 代表 100%
  const sohMin = 92, sohMax = 100;

  const points = data.map((soh, index) => {
    // 計算 X 軸位置 (時間平均分佈)
    const x = xMin + (index / (data.length - 1)) * (xMax - xMin);
    
    // 計算 Y 軸位置 (按 SOH % 比例映射到 SVG 高度)
    const y = yMin - ((soh - sohMin) / (sohMax - sohMin)) * (yMin - yMax);
    
    return `${x},${y}`;
  }).join(' ');

  polyline.setAttribute('points', points);
}

// 執行繪製
drawBatteryTrend(batteryHealthData);