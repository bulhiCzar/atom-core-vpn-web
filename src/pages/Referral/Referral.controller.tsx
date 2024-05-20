import { Button, Input, List, Page, Text } from '@uikit'
import { Scrollbars } from 'react-custom-scrollbars-2'

export const ReferralController = () => {
  return (
    <Page
      title="Affiliate program"
      className="flex flex-col md:gap-24 gap-6"
    >
      <List
        data={[
          {
            title: 'Your referrer:',
            value: <div className="lg:text-base text-sm">0x109a50931159c5C3EDa34718E7CA7825669ff111</div>,
          },
          {
            title: 'Your referrer code:',
            value: '5yU7y0Y4',
          },
        ]}
      />

      <div className="flex flex-col">
        <Text className="text-2xl font-semibold mb-8">
          Enter referral code anf get 5% discount
        </Text>

        <div className="flex justify-between gap-2 md:flex-row flex-col">
          <Input
            placeholder="Your referrer code"
            className="w-auto"
          />
          <Button color="primary">
            Active
          </Button>
        </div>
      </div>

      <div className="flex flex-col">
        <Text className="text-2xl font-semibold mb-8">
          Create your own referral code
        </Text>

        <div className="flex justify-between gap-2 md:flex-row flex-col">
          <Input
            placeholder="Your referrer code"
            className="w-auto"
          />
          <Button color="primary">
            Create
          </Button>
        </div>
      </div>

      <div className="flex flex-col mb-16">
        <Text className="text-2xl font-semibold mb-8">
          Your referrals: 22
        </Text>
        <Scrollbars
          style={{
            height: 200,
            scrollbarWidth: 'none',
            overflow: 'unset',
          }}
          renderThumbVertical={({ style, ...props }) => <div
            {...props}
            style={{
              ...style,
              boxShadow: '0px 0px 33px 5px rgba(138,116,243,0.79)',
              borderRadius: '10px',
            }}
            className="bg-purple"
          />}
          renderView={({ style, ...props }) => <div
            {...props}
            style={{
              ...style,
              '-ms-overflow-style': 'none',
              scrollbarWidth: 'none',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          />}
        >
          <div className="flex flex-col gap-6">
            <Text className="text-sm">0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
            <Text className="text-sm">0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
            <Text className="text-sm">0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
            <Text className="text-sm">0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
            <Text className="text-sm">0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
            <Text className="text-sm">0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
            <Text className="text-sm">0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
            <Text className="text-sm">0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
            <Text className="text-sm">0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
            <Text className="text-sm">0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
            <Text className="text-sm">0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
            <Text className="text-sm">0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
          </div>
        </Scrollbars>
      </div>
    </Page>
  )
}
