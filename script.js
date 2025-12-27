// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 创建雪花效果
    createSnowfall();
    
    // 创建彩灯效果
    createLights();
    
    // 为爱意表达添加交互效果
    addHeartAnimation();
});

// 创建雪花效果
function createSnowfall() {
    const snowfall = document.getElementById('snowfall');
    const snowCount = 100;
    
    for (let i = 0; i < snowCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // 设置雪花样式
        snowflake.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: white;
            border-radius: 50%;
            opacity: ${Math.random() * 0.8 + 0.2};
            left: ${Math.random() * 100}%;
            top: -10px;
            animation: fall ${Math.random() * 5 + 5}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            z-index: 1;
        `;
        
        snowfall.appendChild(snowflake);
    }
    
    // 添加雪花飘落动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            0% {
                transform: translateY(-10px) translateX(0);
            }
            100% {
                transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px);
            }
        }
    `;
    document.head.appendChild(style);
}

// 创建彩灯效果
function createLights() {
    const lightsContainer = document.querySelector('.lights');
    const lightCount = 20;
    const lightColors = ['#FF0000', '#FFD700', '#00FF00', '#00BFFF', '#FF1493'];
    
    for (let i = 0; i < lightCount; i++) {
        const light = document.createElement('div');
        light.classList.add('light');
        
        // 随机位置
        const x = Math.random() * 80 + 10; // 10% to 90%
        const y = Math.random() * 80 + 10; // 10% to 90%
        const size = Math.random() * 8 + 4;
        const color = lightColors[Math.floor(Math.random() * lightColors.length)];
        
        light.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            box-shadow: 0 0 ${size * 2}px ${color};
            animation: twinkle ${Math.random() * 2 + 1}s infinite alternate;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        lightsContainer.appendChild(light);
    }
    
    // 添加彩灯闪烁动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0% {
                opacity: 0.3;
                transform: scale(0.8);
            }
            100% {
                opacity: 1;
                transform: scale(1.2);
            }
        }
    `;
    document.head.appendChild(style);
}

// 添加心形动画效果
function addHeartAnimation() {
    const heartMessages = document.querySelectorAll('.heart-message');
    
    heartMessages.forEach((message, index) => {
        // 为每条消息添加淡入动画
        message.style.opacity = '0';
        message.style.transform = 'translateY(20px)';
        message.style.transition = `opacity 0.8s ease, transform 0.8s ease`;
        
        // 延迟显示
        setTimeout(() => {
            message.style.opacity = '1';
            message.style.transform = 'translateY(0)';
        }, 500 + index * 300);
    });
    
    // 为标题添加心跳效果
    const title = document.querySelector('.title');
    title.style.animation = 'heartbeat 2s infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes heartbeat {
            0%, 100% {
                transform: scale(1);
            }
            10%, 30% {
                transform: scale(1.1);
            }
            20%, 40% {
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(style);
}