export default function Home() {
  return (
    <div>
      <h1
        style={{
          fontSize: '45px',
          textAlign: 'center',
          marginBottom: '35px',
          padding: '12px 16px',
          color: '#6809a8',
        }}
      >
        Welcome to your Phonebook
      </h1>
      <p
        style={{
          textAlign: 'center',
          fontSize: '25px',
          padding: '12px 16px',
          color: '#4730f6',
        }}
      >
        You can register or login if you already have an account. You will be
        able to add a list of contacts, delete or filter.
      </p>
    </div>
  );
}
