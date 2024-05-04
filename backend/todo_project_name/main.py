from fastapi import FastAPI, Depends
from todo_project_name.graphql.schema import schema
from strawberry.fastapi import GraphQLRouter, BaseContext


class ApplicationContext(BaseContext):
    def __init__(self):
        pass


async def get_context(
    custom_context=Depends(ApplicationContext),
):
    return custom_context


graphql_router = GraphQLRouter(
    schema,
    context_getter=get_context,
)


app = FastAPI()
app.include_router(graphql_router, prefix="/api/graphql")
