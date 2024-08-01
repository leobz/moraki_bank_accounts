import HeadMenu from '../components/HeadMenu'
import AccountDetails from '../components/AccountDetails'

const Show = ({ account }) => {
  return(
    <>
      <HeadMenu title="Account Details" linkText="Back to accounts" linkUrl="/accounts" />
      <div className="flex justify-center">
        <AccountDetails account={account} />
      </div>
    </>
  )
}

export default Show;