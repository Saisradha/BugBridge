import Head from 'next/head';
import BugReportForm from '../components/BugReportForm';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - BugBountyHQ</title>
      </Head>
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Report a Bug</h1>
          <BugReportForm />
        </div>
      </main>
    </>
  );
}