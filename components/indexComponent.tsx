// noinspection BadExpressionStatementJS

import {UserProps} from "../props/statProps";
import Link from "next/link";

function Index(props: UserProps) {
  const { users } = props

  return (
      <div>
        <h1>Leaderboard Users</h1>
        <h2>Click on a user to view them</h2>

        {users.map(user => (
          <div key={user._id} className="w-96 bg-white shadow rounded">
            <Link href={`/user/${user._id}`}>
              <h3 style={{cursor: "pointer"}}>
                {user._id} - {user.username}
              </h3>
            </Link>
          </div>
          ))}
      </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.API_URL as string)
  const users = await res.json()

  return {
    props: { users },
  }
}

export default Index