export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'Mô hình trò chuyện',
    name: 'Mô hình trò chuyện',
    description: 'Mô hình chính cho trò chuyện đa năng',
  },
  {
    id: 'mô hình trò chuyện-lý luận',
    name: 'Mô hình lý luận',
    description: 'Sử dụng lý luận nâng cao',
  },
];
