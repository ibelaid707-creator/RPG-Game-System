// =============== نظام الإحصائيات الأساسي ===============
const classStats = {
    assassin: {
        name: 'المغتال',
        icon: '🗡️',
        health: 70,
        mana: 30,
        strength: 8,
        speed: 15,
        defense: 6,
        magic: 5,
        specialty: 'تخفي 10 ثواني',
        color: '#2c3e50'
    },
    warrior: {
        name: 'السيّاف',
        icon: '⚔️',
        health: 150,
        mana: 30,
        strength: 15,
        speed: 8,
        defense: 12,
        magic: 3,
        specialty: 'قوة عالية جداً',
        color: '#c0392b'
    },
    mage: {
        name: 'الساحر',
        icon: '✨',
        health: 50,
        mana: 150,
        strength: 4,
        speed: 9,
        defense: 4,
        magic: 15,
        specialty: 'مانا قوية جداً',
        color: '#8e44ad'
    },
    spellblade: {
        name: 'سيّاف السحر',
        icon: '🔮',
        health: 90,
        mana: 100,
        strength: 12.5,
        speed: 10,
        defense: 8,
        magic: 12.5,
        specialty: 'توازن مثالي',
        color: '#16a085'
    },
    necromancer: {
        name: 'مستدعي الموتى',
        icon: '💀',
        health: 80,
        mana: 125,
        strength: 10,
        speed: 8,
        defense: 7,
        magic: 12.5,
        specialty: 'استدعاء خدم أسود',
        color: '#34495e'
    },
    beastmaster: {
        name: 'مروّض الوحوش',
        icon: '🐺',
        health: 100,
        mana: 125,
        strength: 11,
        speed: 10,
        defense: 9,
        magic: 12.5,
        specialty: 'تدريب الوحوش',
        color: '#d35400'
    },
    summoner: {
        name: 'مستدعي الوحوش',
        icon: '🌟',
        health: 75,
        mana: 125,
        strength: 9,
        speed: 9,
        defense: 7,
        magic: 12.5,
        specialty: 'استدعاء من الدائرة السحرية',
        color: '#2980b9'
    }
};

// =============== المهارات والسحر ===============
const skills = {
    assassin: [
        {
            name: 'ضربة سريعة',
            icon: '⚡',
            desc: 'ضربة عميقة تاركة الأثر',
            damage: 'قوة × 2',
            cost: 10,
            type: 'physical'
        },
        {
            name: 'تخفي الظل',
            icon: '👻',
            desc: 'اختفاء لمدة 10 ثواني',
            effect: 'تحصن تام',
            cost: 30,
            type: 'utility'
        }
    ],
    warrior: [
        {
            name: 'تهشم الأرض',
            icon: '💥',
            desc: 'ضربة قوية جداً',
            damage: 'قوة × 3',
            cost: 20,
            type: 'physical'
        },
        {
            name: 'درع الحديد',
            icon: '🛡️',
            desc: 'زيادة الدفاع مؤقتاً',
            effect: 'دفاع × 2',
            cost: 15,
            type: 'defensive'
        }
    ],
    mage: [
        {
            name: 'كرة النار',
            icon: '🔥',
            desc: 'قصف بالسحر الناري',
            damage: 'سحر × 3',
            cost: 40,
            type: 'magical'
        },
        {
            name: 'درع سحري',
            icon: '✨',
            desc: 'حماية سحرية',
            effect: 'دفاع × 1.5',
            cost: 30,
            type: 'magical'
        }
    ],
    spellblade: [
        {
            name: 'ضربة السحر',
            icon: '🔮',
            desc: 'جمع القوة والسحر',
            damage: 'قوة × 1.5 + سحر × 1.5',
            cost: 35,
            type: 'hybrid'
        },
        {
            name: 'لمعة العازل',
            icon: '⭐',
            desc: 'دفاع وهجوم معاً',
            effect: 'توازن كامل',
            cost: 25,
            type: 'hybrid'
        }
    ],
    necromancer: [
        {
            name: 'استدعاء خادم',
            icon: '💀',
            desc: 'استدعاء عفريت أسود',
            effect: 'خادم يساعد في القتال',
            cost: 50,
            type: 'summoning'
        },
        {
            name: 'تفريغ الحياة',
            icon: '☠️',
            desc: 'سحب الحياة من الأعداء',
            damage: 'سحر × 2',
            cost: 40,
            type: 'magical'
        }
    ],
    beastmaster: [
        {
            name: 'هجوم الوحش',
            icon: '🐺',
            desc: 'إطلاق الوحش للهجوم',
            damage: 'قوة × 2.5',
            cost: 35,
            type: 'summoning'
        },
        {
            name: 'تعزيز الوحش',
            icon: '💪',
            desc: 'تقوية الوحش المروّض',
            effect: 'قوة الوحش × 1.5',
            cost: 30,
            type: 'utility'
        }
    ],
    summoner: [
        {
            name: 'استدعاء من الدائرة',
            icon: '🌟',
            desc: 'استدعاء كائن سحري',
            effect: 'مساعد في القتال',
            cost: 50,
            type: 'summoning'
        },
        {
            name: 'برق سحري',
            icon: '⚡',
            desc: 'تفريغ طاقة سحرية',
            damage: 'سحر × 2',
            cost: 45,
            type: 'magical'
        }
    ]
};

// =============== الأعداء والوحوش ===============
const enemies = [
    {
        name: 'غول',
        icon: '👹',
        health: 50,
        damage: 8,
        reward: 1
    },
    {
        name: 'هيكل عظمي',
        icon: '💀',
        health: 40,
        damage: 6,
        reward: 1
    },
    {
        name: 'عنكبوت سام',
        icon: '🕷️',
        health: 35,
        damage: 10,
        reward: 2
    },
    {
        name: 'تنين صغير',
        icon: '🐉',
        health: 120,
        damage: 20,
        reward: 4
    },
    {
        name: 'ساحر شرير',
        icon: '🧙',
        health: 80,
        damage: 15,
        reward: 3
    },
    {
        name: 'فارس مظلم',
        icon: '🐴',
        health: 100,
        damage: 18,
        reward: 3
    },
    {
        name: 'وحش الظلام',
        icon: '🌑',
        health: 150,
        damage: 25,
        reward: 5
    }
];

// =============== المستويات ===============
const levels = [
    {
        name: 'الغابة المظلمة',
        difficulty: 'سهل',
        reward: '1',
        enemies: 3
    },
    {
        name: 'كهف الموت',
        difficulty: 'متوسط',
        reward: '2',
        enemies: 5
    },
    {
        name: 'قصر الشرير',
        difficulty: 'صعب',
        reward: '3',
        enemies: 7
    },
    {
        name: 'برج الموت',
        difficulty: 'صعب جداً',
        reward: '4',
        enemies: 10
    },
    {
        name: 'بوابة الجحيم',
        difficulty: 'أسطوري',
        reward: '5',
        enemies: 15
    }
];

// =============== متغيرات اللعبة ===============
let currentClass = null;
let playerStats = {};
let totalPoints = 0;
let currentLevel = 1;
let levelPoints = 0;
let weapons = {};
let gameState = {
    health: 0,
    mana: 0,
    maxHealth: 0,
    maxMana: 0
};

// =============== اختيار الفئة ===============
function selectClass(className) {
    currentClass = className;
    const stats = classStats[className];
    
    // تعيين الإحصائيات
    playerStats = { ...stats };
    gameState.health = stats.health;
    gameState.mana = stats.mana;
    gameState.maxHealth = stats.health;
    gameState.maxMana = stats.mana;
    
    // تحديث الواجهة
    document.getElementById('classSelection').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'grid';
    
    updateCharacterDisplay();
    updateStatsDisplay();
    renderLevels();
    renderSkills();
    renderEnemies();
}

// =============== تحديث شاشة الشخصية ===============
function updateCharacterDisplay() {
    document.getElementById('characterAvatar').textContent = playerStats.icon;
    document.getElementById('characterName').textContent = `${playerStats.name} - المستوى ${currentLevel}`;
}

// =============== تحديث شاشة الإحصائيات ===============
function updateStatsDisplay() {
    // تحديث أشرطة الصحة والمانا
    const healthPercent = (gameState.health / gameState.maxHealth) * 100;
    const manaPercent = (gameState.mana / gameState.maxMana) * 100;
    
    document.getElementById('healthBar').style.width = healthPercent + '%';
    document.getElementById('healthText').textContent = `${Math.max(0, Math.floor(gameState.health))}/${gameState.maxHealth}`;
    
    document.getElementById('manaBar').style.width = manaPercent + '%';
    document.getElementById('manaText').textContent = `${Math.max(0, Math.floor(gameState.mana))}/${gameState.maxMana}`;
    
    // تحديث الإحصائيات
    document.getElementById('strengthStat').textContent = Math.floor(playerStats.strength);
    document.getElementById('speedStat').textContent = Math.floor(playerStats.speed);
    document.getElementById('defenseStat').textContent = Math.floor(playerStats.defense);
    document.getElementById('magicStat').textContent = Math.floor(playerStats.magic);
    
    // تحديث المخزون
    document.getElementById('totalPoints').textContent = totalPoints;
    document.getElementById('currentLevel').textContent = currentLevel;
    document.getElementById('levelPoints').textContent = `${levelPoints}/4`;
    document.getElementById('weaponCount').textContent = Object.values(weapons).reduce((a, b) => a + b, 0);
    document.getElementById('swordCount').textContent = weapons.sword || 0;
}

// =============== عرض المستويات ===============
function renderLevels() {
    const levelsList = document.getElementById('levelsList');
    levelsList.innerHTML = '';
    
    levels.forEach((level, index) => {
        const levelDiv = document.createElement('div');
        levelDiv.className = `level-item ${index < currentLevel ? 'completed' : ''}`;
        levelDiv.onclick = () => playLevel(index + 1);
        levelDiv.innerHTML = `
            <div>
                <div class="level-name">المستوى ${index + 1}: ${level.name}</div>
                <div class="level-reward">الصعوبة: ${level.difficulty}</div>
            </div>
            <div style="font-size: 1.2em;">⭐${level.reward}</div>
        `;
        levelsList.appendChild(levelDiv);
    });
}

// =============== عرض المهارات ===============
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = '';
    
    const classSkills = skills[currentClass] || [];
    classSkills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.onclick = () => useSkill(skill);
        skillCard.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
            <div class="skill-desc">${skill.desc}</div>
            <div class="skill-cost">تكلفة: ${skill.cost} مانا</div>
        `;
        skillsGrid.appendChild(skillCard);
    });
}

// =============== عرض الأعداء ===============
function renderEnemies() {
    const enemiesGrid = document.getElementById('enemiesGrid');
    enemiesGrid.innerHTML = '';
    
    enemies.slice(0, 5).forEach(enemy => {
        const enemyCard = document.createElement('div');
        enemyCard.className = 'enemy-card';
        enemyCard.onclick = () => startBattle(enemy);
        enemyCard.innerHTML = `
            <div class="enemy-icon">${enemy.icon}</div>
            <div class="enemy-name">${enemy.name}</div>
            <div class="enemy-health">الصحة: ${enemy.health}</div>
        `;
        enemiesGrid.appendChild(enemyCard);
    });
}

// =============== استخدام المهارة ===============
function useSkill(skill) {
    if (gameState.mana >= skill.cost) {
        gameState.mana -= skill.cost;
        levelPoints += 1;
        
        // تحقق من ترقية المستوى
        if (levelPoints >= 4) {
            currentLevel++;
            levelPoints = 0;
            totalPoints += 4;
            // زيادة الإحصائيات
            playerStats.strength += 1;
            playerStats.speed += 1;
            playerStats.defense += 1;
            playerStats.magic += 1;
        }
        
        updateStatsDisplay();
        alert(`تم استخدام المهارة: ${skill.name}\nحصلت على نقطة!`);
    } else {
        alert('لا توجد مانا كافية!');
    }
}

// =============== بدء المعركة ===============
function startBattle(enemy) {
    const damage = (playerStats.strength + playerStats.magic) / 2;
    const enemyHealth = enemy.health;
    const playerInitialHealth = gameState.health;
    
    // محاكاة المعركة
    let rounds = 0;
    let currentEnemyHealth = enemyHealth;
    let currentPlayerHealth = playerInitialHealth;
    
    while (currentEnemyHealth > 0 && currentPlayerHealth > 0 && rounds < 20) {
        // هجوم اللاعب
        currentEnemyHealth -= damage * (1 + Math.random());
        
        // هجوم العدو
        if (currentEnemyHealth > 0) {
            const defense = playerStats.defense / 10;
            currentPlayerHealth -= Math.max(1, enemy.damage * (1 - defense) * (0.5 + Math.random()));
        }
        
        rounds++;
    }
    
    gameState.health = Math.max(0, currentPlayerHealth);
    updateStatsDisplay();
    
    if (currentEnemyHealth <= 0) {
        levelPoints += enemy.reward;
        totalPoints += enemy.reward * 4;
        alert(`🎉 نصرت في المعركة!\nحصلت على ${enemy.reward * 4} نقطة!\nالأعداء المتبقية: ${currentEnemyHealth}`);
    } else {
        alert(`💀 خسرت المعركة!\nصحتك: ${Math.floor(gameState.health)}`);
    }
    
    if (levelPoints >= 4) {
        currentLevel++;
        levelPoints = 0;
        playerStats.health += 10;
        playerStats.mana += 10;
        gameState.maxHealth = playerStats.health;
        gameState.maxMana = playerStats.mana;
        gameState.health = gameState.maxHealth;
        gameState.mana = gameState.maxMana;
    }
    
    updateStatsDisplay();
}

// =============== تشغيل المستوى ===============
function playLevel(levelNum) {
    alert(`بدء المستوى ${levelNum}: ${levels[levelNum - 1].name}`);
    // يمكن إضافة آلية المستويات المتقدمة هنا
}

// =============== إعادة تعيين اللعبة ===============
function resetGame() {
    currentClass = null;
    playerStats = {};
    totalPoints = 0;
    currentLevel = 1;
    levelPoints = 0;
    weapons = {};
    gameState = {
        health: 0,
        mana: 0,
        maxHealth: 0,
        maxMana: 0
    };
    
    document.getElementById('classSelection').style.display = 'block';
    document.getElementById('gameContainer').style.display = 'none';
}

// =============== تهيئة اللعبة ===============
window.addEventListener('load', () => {
    // اللعبة جاهزة للعب
    console.log('🎮 لعبة RPG جاهزة!');
});