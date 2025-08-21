// Dados em memória - Simulando um banco de dados
let messages = [
    {
        id: 1,
        name: "Rafael",
        avatar: "R",
        preview: "Olá, gostaria de saber sobre o status do meu pedido #12345",
        time: "10:01",
        date: "2024-01-15",
        channel: "whatsapp",
        status: "em-andamento",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Olá, gostaria de saber sobre o status do meu pedido #12345",
                time: "10:01"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Rafael! Vou verificar o status do seu pedido para você.",
                time: "10:02"
            },
            {
                id: 3,
                sender: "agent",
                text: "Seu pedido #12345 está em processamento e será enviado amanhã.",
                time: "10:03"
            }
        ]
    },
    {
        id: 2,
        name: "Alice",
        avatar: "A",
        preview: "Preciso de ajuda com uma troca de produto",
        time: "09:18",
        date: "2024-01-15",
        channel: "instagram",
        status: "abandono",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Preciso de ajuda com uma troca de produto",
                time: "09:18"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Alice! Como posso ajudá-la com a troca?",
                time: "09:20"
            }
        ]
    },
    {
        id: 3,
        name: "Pedro",
        avatar: "P",
        preview: "Dúvida sobre o tamanho do produto",
        time: "08:45",
        date: "2024-01-15",
        channel: "facebook",
        status: "abandono",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Dúvida sobre o tamanho do produto",
                time: "08:45"
            }
        ]
    },
    {
        id: 4,
        name: "Beatriz",
        avatar: "B",
        preview: "Gostaria de saber sobre promoções",
        time: "08:30",
        date: "2024-01-15",
        channel: "instagram",
        status: "marketing",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Gostaria de saber sobre promoções",
                time: "08:30"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Beatriz! Temos várias promoções ativas. Posso te ajudar?",
                time: "08:32"
            },
            {
                id: 3,
                sender: "user",
                text: "Sim, me conte mais sobre os descontos",
                time: "08:35"
            }
        ]
    },
    {
        id: 5,
        name: "Mariana",
        avatar: "M",
        preview: "Problema com o pagamento",
        time: "07:55",
        date: "2024-01-15",
        channel: "email",
        status: "em-andamento",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Problema com o pagamento",
                time: "07:55"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Mariana! Vou ajudá-la com o problema de pagamento.",
                time: "08:00"
            }
        ]
    },
    {
        id: 6,
        name: "Carlos",
        avatar: "C",
        preview: "Produto chegou com defeito",
        time: "07:30",
        date: "2024-01-15",
        channel: "whatsapp",
        status: "concluida",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Produto chegou com defeito",
                time: "07:30"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Carlos! Lamento pelo problema. Vou resolver isso para você.",
                time: "07:35"
            },
            {
                id: 3,
                sender: "agent",
                text: "Já iniciei o processo de troca. Você receberá um email com as instruções.",
                time: "07:40"
            },
            {
                id: 4,
                sender: "user",
                text: "Perfeito! Obrigado pela ajuda.",
                time: "07:45"
            }
        ]
    },
    {
        id: 7,
        name: "Fernanda",
        avatar: "F",
        preview: "Dúvida sobre o vestido que comprei semana passada",
        time: "06:45",
        date: "2024-01-15",
        channel: "telegram",
        status: "em-andamento",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Oi! Comprei um vestido lindo semana passada, mas tenho uma dúvida sobre o tecido",
                time: "06:45"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Fernanda! Que legal que você gostou do vestido! Qual é sua dúvida sobre o tecido?",
                time: "06:50"
            },
            {
                id: 3,
                sender: "user",
                text: "É que vou usar em um casamento e queria saber se posso passar a ferro",
                time: "06:52"
            }
        ]
    },
    {
        id: 8,
        name: "Lucas",
        avatar: "L",
        preview: "Produto não chegou no prazo estimado",
        time: "06:20",
        date: "2024-01-15",
        channel: "whatsapp",
        status: "em-andamento",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Produto não chegou no prazo estimado",
                time: "06:20"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Lucas! Vou verificar o status da entrega para você.",
                time: "06:25"
            },
            {
                id: 3,
                sender: "agent",
                text: "Identifiquei um atraso no transporte. Seu pedido chegará em 2 dias.",
                time: "06:30"
            }
        ]
    },
    {
        id: 9,
        name: "Isabela",
        avatar: "I",
        preview: "Dúvida sobre política de devolução",
        time: "05:55",
        date: "2024-01-15",
        channel: "email",
        status: "concluida",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Dúvida sobre política de devolução",
                time: "05:55"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Isabela! Nossa política de devolução permite trocas em até 30 dias.",
                time: "06:00"
            },
            {
                id: 3,
                sender: "user",
                text: "E como faço para solicitar a devolução?",
                time: "06:05"
            },
            {
                id: 4,
                sender: "agent",
                text: "Você pode solicitar através do nosso site ou aqui mesmo no chat.",
                time: "06:10"
            },
            {
                id: 5,
                sender: "user",
                text: "Perfeito! Obrigada pelas informações.",
                time: "06:15"
            }
        ]
    },
    {
        id: 10,
        name: "Roberto",
        avatar: "R",
        preview: "Comprando presente para minha esposa",
        time: "05:30",
        date: "2024-01-15",
        channel: "telegram",
        status: "abandono",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Oi! Quero comprar um presente para minha esposa, mas não sei o tamanho dela",
                time: "05:30"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Roberto! Que fofo! Posso te ajudar a escolher o presente perfeito. Qual é o tamanho aproximado da sua esposa?",
                time: "05:35"
            }
        ]
    },
    {
        id: 11,
        name: "Camila",
        avatar: "C",
        preview: "Sugestão de melhoria para o app",
        time: "05:00",
        date: "2024-01-15",
        channel: "instagram",
        status: "marketing",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Sugestão de melhoria para o app",
                time: "05:00"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Camila! Adoramos receber sugestões. Conte-nos mais!",
                time: "05:05"
            },
            {
                id: 3,
                sender: "user",
                text: "Seria legal ter mais opções de filtros na busca",
                time: "05:10"
            },
            {
                id: 4,
                sender: "agent",
                text: "Excelente sugestão! Vou encaminhar para nossa equipe de desenvolvimento.",
                time: "05:15"
            }
        ]
    },
    {
        id: 12,
        name: "Ana Paula",
        avatar: "A",
        preview: "Preciso de ajuda para escolher um look para entrevista",
        time: "04:45",
        date: "2024-01-15",
        channel: "telegram",
        status: "em-andamento",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Oi! Tenho uma entrevista de emprego amanhã e preciso de ajuda para escolher o que vestir",
                time: "04:45"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Ana Paula! Parabéns pela entrevista! Vou te ajudar a montar um look profissional e elegante.",
                time: "04:50"
            },
            {
                id: 3,
                sender: "user",
                text: "É para uma empresa de tecnologia, então quero algo moderno mas profissional",
                time: "04:55"
            }
        ]
    },
    {
        id: 13,
        name: "Marina",
        avatar: "M",
        preview: "Quero trocar a blusa que comprei ontem",
        time: "04:20",
        date: "2024-01-15",
        channel: "telegram",
        status: "em-andamento",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Oi! Comprei uma blusa ontem mas quando cheguei em casa vi que não combina com nada que tenho",
                time: "04:20"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Marina! Sem problemas, podemos fazer a troca. Você tem a nota fiscal?",
                time: "04:25"
            },
            {
                id: 3,
                sender: "user",
                text: "Sim, tenho! Queria trocar por uma cor mais neutra",
                time: "04:30"
            }
        ]
    },
    {
        id: 14,
        name: "Juliana",
        avatar: "J",
        preview: "Dúvida sobre a coleção de verão",
        time: "04:00",
        date: "2024-01-15",
        channel: "telegram",
        status: "marketing",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Oi! Vi no Instagram que vocês lançaram a nova coleção de verão. Quando chega na loja?",
                time: "04:00"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Juliana! A coleção de verão já está disponível online e chega nas lojas físicas na próxima semana!",
                time: "04:05"
            },
            {
                id: 3,
                sender: "user",
                text: "Que legal! Tem algum vestido floral na coleção?",
                time: "04:10"
            },
            {
                id: 4,
                sender: "agent",
                text: "Sim! Tem vários vestidos florais lindos! Posso te enviar algumas opções?",
                time: "04:15"
            }
        ]
    },
    {
        id: 15,
        name: "Gabriela",
        avatar: "G",
        preview: "Quero saber sobre a nova coleção de inverno",
        time: "03:45",
        date: "2024-01-15",
        channel: "whatsapp",
        status: "marketing",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Oi! Vi que vocês vão lançar a coleção de inverno. Quando sai?",
                time: "03:45"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Gabriela! A coleção de inverno será lançada no próximo mês. Posso te adicionar na lista de espera?",
                time: "03:50"
            },
            {
                id: 3,
                sender: "user",
                text: "Sim, por favor! Quero ser a primeira a ver",
                time: "03:55"
            }
        ]
    },
    {
        id: 16,
        name: "Gabriela",
        avatar: "G",
        preview: "Problema com o tamanho do vestido que comprei",
        time: "03:30",
        date: "2024-01-15",
        channel: "telegram",
        status: "em-andamento",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Oi! Comprei um vestido online mas veio um tamanho maior do que pedi",
                time: "03:30"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Gabriela! Lamento pelo erro. Vou verificar o pedido e resolver isso para você.",
                time: "03:35"
            },
            {
                id: 3,
                sender: "user",
                text: "Obrigada! Preciso dele para um evento no final de semana",
                time: "03:40"
            }
        ]
    },
    {
        id: 17,
        name: "Gabriela",
        avatar: "G",
        preview: "Dúvida sobre a política de frete grátis",
        time: "03:15",
        date: "2024-01-15",
        channel: "email",
        status: "concluida",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Olá! Gostaria de saber qual o valor mínimo para ter frete grátis?",
                time: "03:15"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Gabriela! O frete grátis é válido para compras acima de R$ 99,90.",
                time: "03:20"
            },
            {
                id: 3,
                sender: "user",
                text: "Perfeito! Vou fazer uma compra maior então",
                time: "03:25"
            }
        ]
    },
    {
        id: 18,
        name: "Patrícia",
        avatar: "P",
        preview: "Quero cancelar meu pedido que ainda não foi enviado",
        time: "02:45",
        date: "2024-01-15",
        channel: "instagram",
        status: "em-andamento",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Oi! Fiz um pedido ontem mas mudei de ideia. Posso cancelar?",
                time: "02:45"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Patrícia! Claro, posso te ajudar com o cancelamento. Qual é o número do pedido?",
                time: "02:50"
            },
            {
                id: 3,
                sender: "user",
                text: "É o #98765. Ainda não foi enviado, né?",
                time: "02:55"
            }
        ]
    },
    {
        id: 19,
        name: "Patrícia",
        avatar: "P",
        preview: "Dúvida sobre o tecido de uma blusa",
        time: "02:30",
        date: "2024-01-15",
        channel: "whatsapp",
        status: "em-andamento",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Oi! Vi uma blusa linda no site de vocês, mas queria saber se o tecido é confortável",
                time: "02:30"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Patrícia! Qual blusa você está se referindo? Posso te dar mais detalhes sobre o tecido.",
                time: "02:35"
            },
            {
                id: 3,
                sender: "user",
                text: "É a blusa de seda azul, da coleção primavera",
                time: "02:40"
            }
        ]
    },
    {
        id: 20,
        name: "Patrícia",
        avatar: "P",
        preview: "Sugestão para melhorar o atendimento",
        time: "02:15",
        date: "2024-01-15",
        channel: "telegram",
        status: "marketing",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Oi! Tenho uma sugestão para vocês melhorarem o atendimento",
                time: "02:15"
            },
            {
                id: 2,
                sender: "agent",
                text: "Olá Patrícia! Adoramos receber feedback! Qual é sua sugestão?",
                time: "02:20"
            },
            {
                id: 3,
                sender: "user",
                text: "Seria legal ter um chat mais rápido no site de vocês",
                time: "02:25"
            },
            {
                id: 4,
                sender: "agent",
                text: "Excelente sugestão! Vou encaminhar para nossa equipe de desenvolvimento.",
                time: "02:30"
            }
        ]
    }
];

// Estado da aplicação
let currentState = {
    selectedMessage: null,
    filteredMessages: [...messages],
    channelFilter: "",
    statusFilter: "",
    searchTerm: ""
};

// Elementos DOM
const messagesList = document.getElementById('messagesList');
const chatMessages = document.getElementById('chatMessages');
const chatUserName = document.getElementById('chatUserName');
const chatUserStatus = document.getElementById('chatUserStatus');
const chatUserAvatar = document.getElementById('chatUserAvatar');
const searchInput = document.getElementById('searchInput');
const channelFilter = document.getElementById('channelFilter');
const statusFilter = document.getElementById('statusFilter');
const concludeBtn = document.getElementById('concludeBtn');
const inProgressBtn = document.getElementById('inProgressBtn');
const chatReply = document.getElementById('chatReply');
const replyInput = document.getElementById('replyInput');
const charCounter = document.getElementById('charCounter');
const sendBtn = document.getElementById('sendBtn');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    renderMessages();
    setupEventListeners();
    setupNavigation();
});

// Configuração dos event listeners
function setupEventListeners() {
    // Filtros
    channelFilter.addEventListener('change', filterMessages);
    statusFilter.addEventListener('change', filterMessages);
    searchInput.addEventListener('input', filterMessages);
    
    // Botões de ação
    concludeBtn.addEventListener('click', concludeMessage);
    inProgressBtn.addEventListener('click', setInProgress);
    
    // Área de resposta
    replyInput.addEventListener('input', handleReplyInput);
    sendBtn.addEventListener('click', sendReply);
    
    // Permitir envio com Enter (Ctrl+Enter para nova linha)
    replyInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.ctrlKey) {
            e.preventDefault();
            if (!sendBtn.disabled) {
                sendReply();
            }
        }
    });
}

// Configuração da navegação
function setupNavigation() {
    // Navegação principal
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.classList.contains('disabled')) {
                e.preventDefault();
                return;
            }
            
            // Remove active de todos os itens
            navItems.forEach(nav => nav.classList.remove('active'));
            // Adiciona active ao item clicado
            this.classList.add('active');
            
            // Mostra o conteúdo correspondente
            const tabId = this.getAttribute('data-tab');
            showTab(tabId);
        });
    });


}

// Mostrar aba específica
function showTab(tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }
}

// Renderizar mensagens
function renderMessages() {
    messagesList.innerHTML = '';
    
    if (currentState.filteredMessages.length === 0) {
        messagesList.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: #999;">
                <i class="fas fa-inbox" style="font-size: 2rem; margin-bottom: 10px;"></i>
                <p>Nenhuma mensagem encontrada</p>
            </div>
        `;
        
        // Resetar chat se não há mensagens
        if (currentState.selectedMessage) {
            resetChat();
        }
        return;
    }
    
    currentState.filteredMessages.forEach(message => {
        const messageElement = createMessageElement(message);
        messagesList.appendChild(messageElement);
    });
    
    // Verificar se a mensagem selecionada ainda está visível
    if (currentState.selectedMessage && !currentState.filteredMessages.find(m => m.id === currentState.selectedMessage.id)) {
        resetChat();
    }
}

// Criar elemento de mensagem
function createMessageElement(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message-item';
    messageDiv.setAttribute('data-message-id', message.id);
    messageDiv.setAttribute('data-cy', 'mensagem');
    
    const isSelected = currentState.selectedMessage && currentState.selectedMessage.id === message.id;
    if (isSelected) {
        messageDiv.classList.add('selected');
    }
    
    const channelIcon = getChannelIcon(message.channel);
    const statusClass = getStatusClass(message.status);
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${message.avatar}</div>
        <div class="message-content">
            <div class="message-header">
                <span class="message-name">${message.name}</span>
                <span class="message-time">${message.time}</span>
            </div>
            <div class="message-preview">${message.preview}</div>
            <div class="message-tags">
                <span class="channel-tag ${message.channel}" onclick="selectMessageByChannel(${message.id})">
                    ${channelIcon} ${getChannelName(message.channel)}
                </span>
                <span class="status-tag ${statusClass}">${getStatusName(message.status)}</span>
            </div>
        </div>
    `;
    
    // Event listener para seleção da mensagem
    messageDiv.addEventListener('click', function(e) {
        // Não selecionar se clicou no ícone do canal
        if (e.target.closest('.channel-tag')) {
            return;
        }
        selectMessage(message);
    });
    
    return messageDiv;
}

// Selecionar mensagem
function selectMessage(message) {
    currentState.selectedMessage = message;
    
    // Atualizar seleção visual
    document.querySelectorAll('.message-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    const selectedElement = document.querySelector(`[data-message-id="${message.id}"]`);
    if (selectedElement) {
        selectedElement.classList.add('selected');
    }
    
    // Atualizar chat
    updateChat(message);
}

// Resetar chat (quando nenhuma mensagem está selecionada)
function resetChat() {
    currentState.selectedMessage = null;
    
    // Resetar interface do chat
    chatUserName.textContent = 'Selecione uma conversa';
    chatUserStatus.textContent = 'Nenhuma conversa selecionada';
    chatUserAvatar.innerHTML = '<i class="fas fa-user"></i>';
    
    // Mostrar mensagem de boas-vindas
    renderChatMessages([]);
    
    // Ocultar área de resposta (que agora inclui os botões de ação)
    chatReply.style.display = 'none';
}

// Selecionar mensagem pelo ícone do canal
function selectMessageByChannel(messageId) {
    const message = messages.find(m => m.id === messageId);
    if (message) {
        selectMessage(message);
    }
}

// Atualizar chat
function updateChat(message) {
    // Atualizar informações do usuário
    chatUserName.textContent = message.name;
    chatUserStatus.textContent = getStatusName(message.status);
    chatUserAvatar.textContent = message.avatar;
    
    // Atualizar mensagens
    renderChatMessages(message.messages);
    
    // Mostrar área de resposta (que agora inclui os botões de ação)
    chatReply.style.display = 'block';
    
    // Limpar e resetar área de resposta
    replyInput.value = '';
    charCounter.textContent = '0/255';
    charCounter.className = 'char-counter';
    sendBtn.disabled = true;
}

// Renderizar mensagens do chat
function renderChatMessages(messages) {
    chatMessages.innerHTML = '';
    
    if (!messages || messages.length === 0) {
        chatMessages.innerHTML = `
            <div class="welcome-message">
                <i class="fas fa-comments"></i>
                <p>Selecione uma conversa para começar</p>
            </div>
        `;
        return;
    }
    
    messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${msg.sender}`;
        
        messageDiv.innerHTML = `
            <div class="message-bubble ${msg.sender}">
                ${msg.text}
                <div class="message-time">${msg.time}</div>
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
    });
    
    // Scroll para o final
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Filtrar mensagens
function filterMessages() {
    const channelValue = channelFilter.value;
    const statusValue = statusFilter.value;
    const searchValue = searchInput.value.toLowerCase();
    
    currentState.channelFilter = channelValue;
    currentState.statusFilter = statusValue;
    currentState.searchTerm = searchValue;
    
    currentState.filteredMessages = messages.filter(message => {
        const matchesChannel = !channelValue || message.channel === channelValue;
        const matchesStatus = !statusValue || message.status === statusValue;
        const matchesSearch = !searchValue || 
            message.name.toLowerCase().includes(searchValue) ||
            message.preview.toLowerCase().includes(searchValue);
        
        return matchesChannel && matchesStatus && matchesSearch;
    });
    
    renderMessages();
}

// Concluir mensagem
function concludeMessage() {
    if (!currentState.selectedMessage) return;
    
    const message = currentState.selectedMessage;
    message.status = 'concluida';
    
    // Adicionar mensagem de conclusão
    const conclusionMessage = {
        id: message.messages.length + 1,
        sender: 'agent',
        text: 'Atendimento finalizado',
        time: getCurrentTime()
    };
    
    message.messages.push(conclusionMessage);
    
    // Atualizar interface
    updateChat(message);
    renderMessages();
    
    // Mostrar notificação
    showNotification('Atendimento finalizado com sucesso!', 'success');
}

// Definir como em andamento
function setInProgress() {
    if (!currentState.selectedMessage) return;
    
    const message = currentState.selectedMessage;
    message.status = 'em-andamento';
    
    // Adicionar mensagem de retorno
    const returnMessage = {
        id: message.messages.length + 1,
        sender: 'agent',
        text: 'A mensagem voltará para fila de atendimento',
        time: getCurrentTime()
    };
    
    message.messages.push(returnMessage);
    
    // Atualizar interface
    updateChat(message);
    renderMessages();
    
    // Mostrar notificação
    showNotification('Mensagem retornada para fila de atendimento!', 'info');
}

// Funções auxiliares
function getChannelIcon(channel) {
    const icons = {
        whatsapp: '<i class="fab fa-whatsapp"></i>',
        telegram: '<i class="fab fa-telegram-plane"></i>',
        email: '<i class="fas fa-envelope"></i>',
        instagram: '<i class="fab fa-instagram"></i>',
        facebook: '<i class="fab fa-facebook"></i>'
    };
    return icons[channel] || '<i class="fas fa-comment"></i>';
}

function getChannelName(channel) {
    const names = {
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
        email: 'E-mail',
        instagram: 'Instagram',
        facebook: 'Facebook'
    };
    return names[channel] || channel;
}

function getStatusClass(status) {
    const classes = {
        'concluida': 'concluida',
        'em-andamento': 'em-andamento',
        'abandono': 'abandono',
        'marketing': 'marketing'
    };
    return classes[status] || status;
}

function getStatusName(status) {
    const names = {
        'concluida': 'Concluída',
        'em-andamento': 'Em Andamento',
        'abandono': 'Abandono',
        'marketing': 'Marketing'
    };
    return names[status] || status;
}

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
}

// Funções para área de resposta
function handleReplyInput() {
    const text = replyInput.value;
    const charCount = text.length;
    const maxChars = 255;
    
    // Atualizar contador
    charCounter.textContent = `${charCount}/${maxChars}`;
    
    // Atualizar classes do contador
    charCounter.className = 'char-counter';
    if (charCount > maxChars * 0.8) {
        charCounter.classList.add('near-limit');
    }
    if (charCount >= maxChars) {
        charCounter.classList.add('at-limit');
    }
    
    // Habilitar/desabilitar botão de enviar
    sendBtn.disabled = charCount === 0;
}

function sendReply() {
    const text = replyInput.value.trim();
    
    if (!text || !currentState.selectedMessage) {
        return;
    }
    
    // Adicionar mensagem do agente
    const newMessage = {
        id: currentState.selectedMessage.messages.length + 1,
        sender: 'agent',
        text: text,
        time: getCurrentTime()
    };
    
    currentState.selectedMessage.messages.push(newMessage);
    
    // Atualizar preview da mensagem na lista
    currentState.selectedMessage.preview = text.length > 50 ? text.substring(0, 50) + '...' : text;
    
    // Atualizar interface
    updateChat(currentState.selectedMessage);
    renderMessages();
    
    // Mostrar notificação
    showNotification('Mensagem enviada com sucesso!', 'success');
    
    // Limpar campo de resposta
    replyInput.value = '';
    handleReplyInput();
}

function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    `;
    
    // Definir cor baseada no tipo
    const colors = {
        success: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
        info: 'linear-gradient(135deg, #17a2b8 0%, #138496 100%)',
        warning: 'linear-gradient(135deg, #ffc107 0%, #fd7e14 100%)',
        error: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)'
    };
    
    notification.style.background = colors[type] || colors.info;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Event listeners para ícones flutuantes
document.addEventListener('DOMContentLoaded', function() {
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    floatingIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const iconClass = this.className;
            
            if (iconClass.includes('whatsapp')) {
                showNotification('Integração com WhatsApp ativada!', 'success');
            } else if (iconClass.includes('instagram')) {
                showNotification('Integração com Instagram ativada!', 'success');
            } else if (iconClass.includes('new-message')) {
                showNotification('Nova mensagem criada!', 'info');
            } else if (iconClass.includes('document')) {
                showNotification('Documento anexado!', 'info');
            } else if (iconClass.includes('email')) {
                showNotification('E-mail enviado!', 'success');
            }
        });
    });
});

// Função para adicionar nova mensagem (para demonstração)
function addNewMessage() {
    const channels = ['whatsapp', 'telegram', 'email', 'instagram'];
    const randomChannel = channels[Math.floor(Math.random() * channels.length)];
    
    const newMessage = {
        id: messages.length + 1,
        name: "Nova Cliente",
        avatar: "N",
        preview: "Olá, tenho uma dúvida sobre produtos",
        time: getCurrentTime(),
        date: new Date().toISOString().split('T')[0],
        channel: randomChannel,
        status: "em-andamento",
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Olá, tenho uma dúvida sobre produtos",
                time: getCurrentTime()
            }
        ]
    };
    
    messages.unshift(newMessage);
    filterMessages();
    showNotification(`Nova mensagem recebida via ${getChannelName(randomChannel)}!`, 'info');
}

// Simular recebimento de mensagens (para demonstração)
setInterval(() => {
    if (Math.random() < 0.1) { // 10% de chance a cada 30 segundos
        addNewMessage();
    }
}, 30000); 