
import Image from 'next/image'
import axios from 'axios';
import Head from 'next';
import Link from 'next/link';

function Park({ park }) {
    const parkData = park.data[0];
    return (<div>
        {/* <Head>
            <title>My Park Data</title>
            <link rel="icon" href={"/favicon.ico"} />
        </Head> */}
        <main>
            <h1>Park page</h1>
            <Link href="/">My Next Park Home</Link>
        </main>
        <header style={{ backgroundImage: `url(${parkData.images[0].url})`, height: 300 }}>
            <div>
                <h1>
                    {parkData?.fullName}
                </h1>
            </div>
        </header>
        <section>
            <h2>About the Park</h2>
            <div>
                <img src="/download.jpg" alt="nature" />
                <p>{parkData.description}</p>
            </div>
        </section>
        <section>
            <h2>Getting here</h2>
            <div>
                <div>
                    <p>{parkData.directionsInfo}</p>
                    <b>
                        <a href={parkData.directionsUrl}>URL DIRECTIONS</a>
                    </b>
                </div>
                <img src="/download.jpg"></img>
            </div>
        </section>
    </div>);
}

export const getStaticPaths = async () => {
    const res = await axios.get(`https://developer.nps.gov/api/v1/parks?limit=10&api_key=7hdKbKKAHL4liByqDtfoN93KpWGb0T7ClRwGagdJ`);

    const parks = res.data;

    const paths = parks.data.map((park) => {
        return {
            params: { park: park.parkCode, }
        }
    });

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async ({ params }) => {
    // 7hdKbKKAHL4liByqDtfoN93KpWGb0T7ClRwGagdJ
  // TODO: move token to env
    const res = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${params.park}&api_key=7hdKbKKAHL4liByqDtfoN93KpWGb0T7ClRwGagdJ`);
    const park = res.data;

    return {
        props: {
            park
        }
    }

}

export default Park;