{/* @ts-expect-error Server Component */}
import Link from 'next/link';
async function getData() {
  const res = await fetch('http://127.0.0.1:10009/wp-json/data/v1/profiles/');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const profiles = await getData();

  return <main>
    <div>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <Link href={`/${profile.username}`} >
          <h2>{profile.display_name}</h2>
          </Link>
          <p>{profile.bio}</p>
          <img src={profile.avatar_url} alt={profile.avatar_alt} />
          <h3>Gallery</h3>
          <ul>
            {profile.gallery.map((image) => (
              <li key={image.url_full}>
                <img src={image.url_thumbnail} alt={image.alt} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </main>;
}




/*
async function getPosts() {
  const response = await fetch("https://www.flames.agency/api/profiles.json");
  return response.json();
}

export default async function Home() {
  const { profiles } = await getPosts();

  return (
    <div>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <h2>{profile.display_name}</h2>
          <p>{profile.bio}</p>
          <img src={profile.avatar_url} alt={profile.avatar_alt} />
          <h3>Gallery</h3>
          <ul>
            {profile.gallery.map((image) => (
              <li key={image.url_full}>
                <img src={image.url_thumbnail} alt={image.alt} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

  );
}
*/







/*
// WORKING: This Works
async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  return response.json();
}

export default async function Home() {
  const { posts } = await getPosts();

  return (
    <div>
      {posts.map((post) => (
        <p key={post.id}>{post.id}</p> 
      ))}
    </div>
  );
}
*/
