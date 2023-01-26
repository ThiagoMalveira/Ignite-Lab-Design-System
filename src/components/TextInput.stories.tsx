import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInputRootProps, TextInputs } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInputs.Root,
  args: {
    children: [
      <TextInputs.Icon>
        <Envelope />
      </TextInputs.Icon>,
      <TextInputs.Input placeholder="Type your e-mail address" />
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInputs.Input placeholder="Type your e-mail address" />
  }
}
