import IndexCards from '../components/IndexCards'
import HeadMenu from '../components/HeadMenu'

const Index = ({accounts}) => {
  // TODO: Get path from inertia props
  const newAccountPath = "/accounts/new"

  return(
    <div>
      <HeadMenu title="All Accounts" linkText="Create new account" linkUrl={newAccountPath}/>
      <IndexCards accounts={accounts} />
    </div>
  )
};

export default Index;