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

        <div className="flex justify-between gap-2">
          <Input
            placeholder="Your referrer code"
            className="w-auto"
          />
          <Button color="primary">
            Create
          </Button>
        </div>
      </div>

      <div className="flex flex-col">
        <Text className="text-2xl font-semibold mb-8">
          Your referrals: 22
        </Text>
        <div className="flex flex-col gap-6">
          <Text>0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
          <Text>0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
          <Text>0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
          <Text>0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
          <Text>0x109a50931159c5C3EDa34718E7CA7825669ff111</Text>
        </div>
      </div>
    </Page>
  )
}
