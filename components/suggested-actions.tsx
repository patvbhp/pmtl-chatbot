'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { memo } from 'react';
import type { UseChatHelpers } from '@ai-sdk/react';
import type { VisibilityType } from './visibility-selector';
import type { ChatMessage } from '@/lib/types';

interface SuggestedActionsProps {
  chatId: string;
  sendMessage: UseChatHelpers<ChatMessage>['sendMessage'];
  selectedVisibilityType: VisibilityType;
}

function PureSuggestedActions({
  chatId,
  sendMessage,
  selectedVisibilityType,
}: SuggestedActionsProps) {
  const suggestedActions = [
const suggestedActions = [
  {
    title: 'Lợi ích của',
    label: 'việc sử dụng Next.js là gì?',
    action: 'Lợi ích của việc sử dụng Next.js là gì?',
  },
  {
    title: 'Viết mã để',
    label: 'minh họa thuật toán Dijkstra',
    action: 'Viết mã để minh họa thuật toán Dijkstra',
  },
  {
    title: 'Giúp tôi viết bài luận',
    label: 'về Thung lũng Silicon',
    action: 'Giúp tôi viết một bài luận về Thung lũng Silicon',
  },
  {
    title: 'Thời tiết hôm nay',
    label: 'ở San Francisco như thế nào?',
    action: 'Thời tiết hôm nay ở San Francisco như thế nào?',
  },
  // Thêm các gợi ý dịch thuật:
  {
    title: 'Dịch sang tiếng Việt',
    label: 'Tôi cần dịch đoạn văn sau...',
    action: 'Hãy dịch đoạn văn sau sang tiếng Việt:',
  },
  {
    title: 'Dịch sang tiếng Anh',
    label: 'Giúp tôi dịch đoạn văn này',
    action: 'Hãy dịch đoạn văn sau sang tiếng Anh:',
  },
  {
    title: 'Tóm tắt văn bản',
    label: 'Tóm tắt nội dung bên dưới giúp tôi',
    action: 'Bạn có thể tóm tắt đoạn văn sau trong 3 câu không?',
  },
];


  return (
    <div
      data-testid="suggested-actions"
      className="grid sm:grid-cols-2 gap-2 w-full"
    >
      {suggestedActions.map((suggestedAction, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05 * index }}
          key={`suggested-action-${suggestedAction.title}-${index}`}
          className={index > 1 ? 'hidden sm:block' : 'block'}
        >
          <Button
            variant="ghost"
            onClick={async () => {
              window.history.replaceState({}, '', `/chat/${chatId}`);

              sendMessage({
                role: 'user',
                parts: [{ type: 'text', text: suggestedAction.action }],
              });
            }}
            className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start"
          >
            <span className="font-medium">{suggestedAction.title}</span>
            <span className="text-muted-foreground">
              {suggestedAction.label}
            </span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

export const SuggestedActions = memo(
  PureSuggestedActions,
  (prevProps, nextProps) => {
    if (prevProps.chatId !== nextProps.chatId) return false;
    if (prevProps.selectedVisibilityType !== nextProps.selectedVisibilityType)
      return false;

    return true;
  },
);
