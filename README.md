# GraphQL?

## 1. Over-fetching 문제를 해결하기 좋다.

Database 에 내가 사용하지 않을 영역을 요청하는 방식은 효율적이지 못하다. : Over-fetching
개발자가 원하는 정보만 GET이 가능하다. (FE <-> Database)

## 2. Under-fetching 문제를 해결하기 좋다.

/feed/
/notifications/
/user/1/
REST에서 하나를 완성하기위해. 많은 소스를 요청하는 경우.

---

## 위 두가지 문제를 해결하기위해서, GraphQL은 url이 없다.

그래프QL은 URL 체계가 존재하지 않다.

심플예시)

    query::GraphQL {
        feed {
            comments
            likeNumber
        }
        notifications{
            isRead
        }
        user{
            username
            profilePic
        }
    }

    javascript
    {
        feed:[
            {
                comments:1,
                likeNumber:20
            },
            {
                comments:12,
                likeNumber:0
            }
        ],
        notifications:[
            {
                isRead:false
            },
            {
                isRead:true
            }
        ],
        user : {
            username:"wabi",
            profile: "http://"
        }
    }

---

## GraphQL은, schema를 지정하고 resolvers(해석자)로 해석을하여, 데이터를 주고 받는다.

schema?
데이터를 주고 받을때 무엇 무엇을 주고 받을지에 대한 설명

그래프QL로 스키마를 지정하면
resolver에 지정한 Query 또는 Mutation으로
GET, EDIT, CREATE, DELETE를 하게 된다.

> Query는 데이터베이스에서 불러올 데이터들을 지정하는 그래프QL 해석코드를 나타낸다.
> Mutation은 fn 내부 코드에 따라 데이터를 RUD하는 그래프QL 해석코드를 나타낸다.

예시)

    const resolvers = {
        Query: {
            videos: () => getVideos(),
            video: (_, { id }) => getById(id),
            movies: (_, { limit, rating, sorting }) => getMovies(limit, rating, sorting)
        },
        Mutation: {
            addVideo: (_, { name, viewCnt, downloadCnt, reviewCnt }) =>
                addVideo(name, viewCnt, downloadCnt, reviewCnt),
            deleteVideo: (_, { id }) => deleteVideo(id)
        }
    };

#### 예시에 나오는 "\_" 언더바 매개변수는 무엇인가?

> The full signature for a resolver function is (parent, args, context, info) => {}

resolver function은 (parent, args, context, info)를 매개변수로 갖는다고 한다. 해당 parent에 들어갈 변수는
function 내부에 쓰이질 않으므로 아무의미 없이 "\_" 라고 예시에는 넣은 것이다.
