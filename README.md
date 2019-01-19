# GraphQL?

## 1. Over-fetching 문제를 해결하기 좋다.

Database 에 내가 사용하지 않을 영역을 요청하는 방식은 효율적이지 못하다. : Over-fetching
개발자가 원하는 정보만 GET이 가능하다. (FE <-> Database)

## 2. Under-fetching 문제를 해결하기 좋다.

/feed/
/notifications/
/user/1/
REST에서 하나를 완성하기위해. 많은 소스를 요청하는 경우.

### 위 두가지 문제를 해결하기위해서, GraphQL은 url이 없다.

URL 체계가 존재하지 않다.

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
