export function getAvatarUrl(user: any): string {
  return user?.profile?.avatar?.url ?? 'No Avatar'
}

console.log(getAvatarUrl({ profile: { avatar: { url: 'https://example.com/a.png' } } }))
console.log(getAvatarUrl({}))
