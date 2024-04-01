import Card from '@/components/card';
import Link from 'next/link';

export default function ArchivedNotifications() {
  return (
    <Card>
      <div style={{ marginRight: 4 }}>Archived Notifications</div>
      <Link href="/complex-dashboard" style={{ color: 'blue' }}>
        Default
      </Link>
    </Card>
  );
}
