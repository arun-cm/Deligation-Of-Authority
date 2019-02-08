export default function (state: any = null, action: any) {

    const pageSize: number = 5;

    var users = [
        {
            "id": 1,
            "name": "Clara",
            "email": "gordon@barefoot.mz",
            "active": false
        },
        {
            "id": 2,
            "name": "Marilyn",
            "email": "gayle@guthrie.sk",
            "active": false
        },
        {
            "id": 3,
            "name": "Clifford",
            "email": "wesley@stuart.ci",
            "active": true
        },
        {
            "id": 4,
            "name": "Marion",
            "email": "dianne@wiley.mk",
            "active": true
        },
        {
            "id": 5,
            "name": "Dolores",
            "email": "gene@jennings.sh",
            "active": false
        },
        {
            "id": 6,
            "name": "Sherry",
            "email": "eugene@scarborough.ps",
            "active": true
        },
        {
            "id": 7,
            "name": "Chris",
            "email": "luis@may.mw",
            "active": false
        },
        {
            "id": 8,
            "name": "Bonnie",
            "email": "jennifer@gould.pa",
            "active": true
        },
        {
            "id": 9,
            "name": "Marcia",
            "email": "jeanne@robertson.eh",
            "active": false
        },
        {
            "id": 10,
            "name": "Glenda",
            "email": "arnold@erickson.cv",
            "active": false
        },
        {
            "id": 11,
            "name": "Allen",
            "email": "erica@finch.gq",
            "active": false
        },
        {
            "id": 12,
            "name": "Alice",
            "email": "bob@house.gi",
            "active": true
        },
        {
            "id": 13,
            "name": "Ted",
            "email": "ashley@goldman.li",
            "active": true
        },
        {
            "id": 14,
            "name": "Marshall",
            "email": "amy@kemp.lk",
            "active": true
        },
        {
            "id": 15,
            "name": "Donna",
            "email": "mary@katz.uy",
            "active": false
        },
        {
            "id": 16,
            "name": "Carolyn",
            "email": "elaine@hinson.bv",
            "active": true
        },
        {
            "id": 17,
            "name": "Ronald",
            "email": "malcolm@burton.tw",
            "active": true
        },
        {
            "id": 18,
            "name": "Luis",
            "email": "kathleen@pitts.es",
            "active": true
        },
        {
            "id": 19,
            "name": "Kelly",
            "email": "jerome@mangum.ps",
            "active": true
        },
        {
            "id": 20,
            "name": "Alex",
            "email": "martin@carver.hr",
            "active": false
        },
        {
            "id": 21,
            "name": "Clyde",
            "email": "marion@morse.mm",
            "active": true
        },
        {
            "id": 22,
            "name": "Nelson",
            "email": "bruce@wu.mh",
            "active": true
        },
        {
            "id": 23,
            "name": "Marion",
            "email": "tracey@sullivan.sc",
            "active": true
        },
        {
            "id": 24,
            "name": "Jennifer",
            "email": "ronnie@stone.as",
            "active": true
        },
        {
            "id": 25,
            "name": "Elsie",
            "email": "gilbert@huffman.dk",
            "active": false
        },
        {
            "id": 26,
            "name": "Lucille",
            "email": "christian@hartman.gf",
            "active": false
        },
        {
            "id": 27,
            "name": "Katherine",
            "email": "vincent@woodward.td",
            "active": false
        },
        {
            "id": 28,
            "name": "Patricia",
            "email": "samuel@roth.tj",
            "active": false
        },
        {
            "id": 29,
            "name": "Martha",
            "email": "stacy@cochran.fm",
            "active": true
        },
        {
            "id": 30,
            "name": "Caroline",
            "email": "wendy@meadows.at",
            "active": true
        },
        {
            "id": 31,
            "name": "Barbara",
            "email": "alice@wallace.is",
            "active": false
        },
        {
            "id": 32,
            "name": "Ronald",
            "email": "martha@kramer.jm",
            "active": false
        },
        {
            "id": 33,
            "name": "George",
            "email": "erika@curtis.eg",
            "active": false
        },
        {
            "id": 34,
            "name": "Franklin",
            "email": "courtney@holloway.se",
            "active": false
        },
        {
            "id": 35,
            "name": "Tracy",
            "email": "sandy@alexander.hk",
            "active": false
        },
        {
            "id": 36,
            "name": "Harry",
            "email": "marsha@warren.bq",
            "active": false
        },
        {
            "id": 37,
            "name": "Yvonne",
            "email": "rick@huffman.sm",
            "active": true
        },
        {
            "id": 38,
            "name": "Rhonda",
            "email": "beth@mcknight.dm",
            "active": false
        },
        {
            "id": 39,
            "name": "Rick",
            "email": "alice@willis.sr",
            "active": false
        },
        {
            "id": 40,
            "name": "Willie",
            "email": "kate@sparks.de",
            "active": false
        },
        {
            "id": 41,
            "name": "Paula",
            "email": "sharon@dillon.gh",
            "active": false
        },
        {
            "id": 42,
            "name": "Tamara",
            "email": "allen@chang.fm",
            "active": true
        },
        {
            "id": 43,
            "name": "Greg",
            "email": "gladys@tilley.ec",
            "active": false
        },
        {
            "id": 44,
            "name": "Theresa",
            "email": "bruce@hoover.net",
            "active": true
        },
        {
            "id": 45,
            "name": "Warren",
            "email": "shawn@hubbard.bm",
            "active": false
        },
        {
            "id": 46,
            "name": "Eva",
            "email": "tara@bowman.sk",
            "active": true
        },
        {
            "id": 47,
            "name": "Jack",
            "email": "betsy@hayes.pt",
            "active": false
        },
        {
            "id": 48,
            "name": "Ashley",
            "email": "louise@starr.mu",
            "active": true
        },
        {
            "id": 49,
            "name": "Heather",
            "email": "theodore@phillips.ky",
            "active": true
        },
        {
            "id": 50,
            "name": "Erin",
            "email": "marc@owen.nz",
            "active": true
        }

    ];

    switch (action.type) {
        case "NEXT_USERS":
            return users.slice((pageSize * (action.payload - 1)), (pageSize * action.payload));
        default:
            return users.slice(0, pageSize);
    }

}