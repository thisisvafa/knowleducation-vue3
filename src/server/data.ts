import { Server, Response } from 'miragejs';

export function createMirageServer(): Server {
  return new Server({
    routes() {
        this.namespace = 'api';
        this.get('/blogs', () => {
            return {
                blogs: [
                    { id: 1, title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit viverra ut, pharetra egestas curabitur nostra praesent ligula diam' },
                    { id: 2, title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit viverra ut, pharetra egestas curabitur nostra praesent ligula diam' },
                    { id: 3, title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit viverra ut, pharetra egestas curabitur nostra praesent ligula diam' },
                    { id: 4, title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit viverra ut, pharetra egestas curabitur nostra praesent ligula diam' },
                    { id: 5, title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit viverra ut, pharetra egestas curabitur nostra praesent ligula diam' },
                    { id: 6, title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit viverra ut, pharetra egestas curabitur nostra praesent ligula diam' },
                    { id: 7, title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit viverra ut, pharetra egestas curabitur nostra praesent ligula diam' },
                    { id: 8, title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit viverra ut, pharetra egestas curabitur nostra praesent ligula diam' },
                    { id: 9, title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit viverra ut, pharetra egestas curabitur nostra praesent ligula diam' },
                ],
            };
        });
    },
  });
}