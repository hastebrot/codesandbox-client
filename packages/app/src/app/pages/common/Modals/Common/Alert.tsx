import React from 'react';
import { Element, Button, Text, Stack } from '@codesandbox/components';
import css from '@styled-system/css';

type Props = {
  onCancel?: () => void;
  onPrimaryAction?: () => void;
  children?: any;
  cancelMessage?: string;
  confirmMessage?: string;
  title: string;
  description?: string;
  type?: 'link' | 'primary' | 'danger' | 'secondary';
};

export const Alert = ({
  onCancel,
  onPrimaryAction,
  children,
  cancelMessage = 'Cancel',
  confirmMessage = 'Confirm',
  title,
  description,
  type = 'primary',
}: Props) => (
  <Element padding={4} paddingTop={6}>
    <Text weight="bold" block size={4} paddingBottom={2}>
      {title}
    </Text>
    {description && (
      <Text marginBottom={6} size={3} block>
        {description}
      </Text>
    )}
    {children || (
      <Stack gap={2} align="center" justify="flex-end">
        {onCancel && (
          <Button
            css={css({
              width: 'auto',
            })}
            variant="link"
            onClick={onCancel}
          >
            {cancelMessage}
          </Button>
        )}
        {onPrimaryAction && (
          <Button
            variant={type}
            title={confirmMessage}
            css={css({
              width: 'auto',
            })}
            onClick={onPrimaryAction}
          >
            <Text>{confirmMessage}</Text>
          </Button>
        )}
      </Stack>
    )}
  </Element>
);