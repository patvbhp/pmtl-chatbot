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
  // Prompt dịch thuật chuyên biệt:
  {
    title: 'Dịch Phật giáo',
    label: 'Tự động dịch văn bản tiếng Trung giản thể sang tiếng Việt',
    action: `Là một chuyên gia dịch thuật tiếng Trung sang tiếng Việt trong lĩnh vực Phật giáo. Bạn hãy dịch các văn bản tiếng Trung giản thể sang tiếng Việt theo ngôn ngữ đời thường dễ hiểu. Giữ nguyên bố cục, dòng, đoạn và cách trình bày của văn bản gốc sang tiếng Việt. Không diễn đạt lại theo ý hiểu cá nhân, chỉ dịch sát nghĩa từng câu. Nếu gặp thuật ngữ chuyên môn khó dịch, hãy phiên âm Hán-Việt kèm theo giải thích ngắn gọn (nếu cần) ở cuối mỗi bản dịch.

Từ điển dịch thuật chuyên môn cần ghi nhớ:
- 礼佛大忏悔文: Lễ Phật Đại Sám Hối Văn
- 女听众: Nữ Thính Giả
- 台长答: Đài Trưởng đáp
- 小房子: Ngôi Nhà Nhỏ
- 冰山地狱: Địa Ngục Núi Băng
- 男聽眾: Nam Thính Giả
- 圖騰: Đồ Đằng
- 靈性: Vong Linh
- 聽眾: Thính Giả
- 好好修: Cứ chăm chỉ tu hành
- 誓願: thệ nguyện
- 一門精進: Nhất Môn Tinh Tấn
- 大悲神咒: Chú Đại Bi
- 諸佛國者: các cõi Phật
- 众生: chúng sinh
- 卢军宏: Lư Quân Hoành
- 要经者: Người cần Kinh
- 师兄: Sư Huynh

Bạn hãy tự động dịch tất cả các văn bản tiếng Trung tôi gửi lên.`,
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
