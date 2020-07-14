# meeting-scheduler
A web application to schedule a meeting among a group of participants

## Application Flow
1. Host creates a meeting by providing name and availability. A unique meeting ID is generated for the meeting along with a url.
2. The link can be forwarded to the participants to receive their inputs.
3. The participants provide their name and availability (based on host availability)
4. The result is updated on the same link.

## Data model
```
{
    "meetings": [
        {
            "title": "meeting 1", 
            "participants": [
                {
                    "id": "id1",
                    "name": "participant1",
                    "availability": [
                        "3 Aug",
                        "5 Aug"
                    ]
                },
                {
                    "id": "id2",
                    "name": "participant2",
                    "availability": [
                        "4 Aug",
                        "5 Aug",
                        "6 Aug"
                    ]
                }
            ]
        },
        {
            "title": "meeting 2", 
            "participants": [
                {
                    "id": "id1",
                    "name": "participant1",
                    "availability": [
                        "21 Nov",
                        "22 Nov",
                        "24 Nov"
                    ]
                },
                {
                    "id": "id2",
                    "name": "participant2",
                    "availability": [
                        "21 Nov",
                        "22 Nov"
                    ]
                }
            ]
        }
    ]
}
```

## Questions
1. Strings are being used to store dates. Is there a better way?
2. 


## References
1. https://github.com/briancappello/flask-react-spa
2. https://github.com/react-boilerplate/react-boilerplate
