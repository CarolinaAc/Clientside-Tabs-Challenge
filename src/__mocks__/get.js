// to test one level above if we were using axios or anyother 3rd party packages for fetching the data
export const get = (url) => {
    return Promise.resolve({data: { response: [
        {
            webTitle: "My son’s first faltering steps in football",
           webUrl: "https://www.theguardian.com/lifeandstyle/2020/oct/04/seamas-oreilly-he-may-desert-the-pitch-but-the-boys-football-journey-has-begun",
            }
    ]}})
}