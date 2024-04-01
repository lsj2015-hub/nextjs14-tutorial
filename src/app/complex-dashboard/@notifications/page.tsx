import Card from '@/components/card';
import Link from 'next/link';

export default function Notifications() {
  return (
    <Card>
      <div style={{ marginRight: 4 }}>Notifications</div>
      <Link href="/complex-dashboard/archived" style={{ color: 'green' }}>
        Archived
      </Link>
    </Card>
  );
}
