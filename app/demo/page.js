import { redirect } from 'next/navigation';

export default async function DemoRedirectPage(props) {
  const searchParams = await props.searchParams;
  const queryString = new URLSearchParams(searchParams || {}).toString();
  redirect(queryString ? `/platform/demo?${queryString}` : '/platform/demo');
}
