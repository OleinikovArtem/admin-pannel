export default function UserId({ params }: { params: { userId: string } }) {
  return <h2>User: {params.userId}</h2>
}
