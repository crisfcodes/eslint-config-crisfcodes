import React from 'react'

export default Users

const response = [false, () => {}]

const [loading, setIsLoading] = response

enum Profile {
  Admin = 'Admin',
}

type UsersProps = {
  nameFilter: string
}
function Users({nameFilter}: UsersProps) {
  const users = [{name: 'Janice', friends: ['Albert', 'Nancy'], id: 23}].filter(
    ({name}) => name.toLowerCase().includes(nameFilter),
  )

  return (
    <div className="user-list" id="users-section" data-testid="users">
      {users.map(user => (
        <div key={user.id}>
          {user.name} is friends with {user.friends.join(', ')}
        </div>
      ))}
    </div>
  )
}

export function variableNames() {
  const user$ = 'user stream'
  const $el = 'dom node'
  const camelCase = 'camelCase'
  const PascalCase = 'PascalCase'
  const __thing = '__filename'
  const CONST_VALUE = Profile.Admin
  const __DEV__ = 'global constant'
  const _ = 'Ignore variable'
  const isLoading = [loading, setIsLoading]
  return {
    $el,
    user$,
    camelCase,
    PascalCase,
    __thing,
    __DEV__,
    CONST_VALUE,
    _,
    isLoading,
  }
}
