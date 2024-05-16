import { Button, Input, List, Page, Text } from '@uikit'

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
            value: '0x109a50931159c5C3EDa34718E7CA7825669ff111',
          },
          {
            title: 'Your referrer code:',
            value: '5yU7y0Y4',
          },
        ]}
      />

      <div className="flex flex-col">
        <Text className="text-2xl font-semibold mb-8">
          Create your own referral code
        </Text>

        <div className="flex justify-between">
          <Input />
          <Button>
            Create
          </Button>
        </div>
      </div>
    </Page>
  )
}
