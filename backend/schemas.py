from pydantic import BaseModel
from typing import Optional

class TodoBase(BaseModel):
    text: str
    priority: str = "medium"

class TodoCreate(TodoBase):
    pass

class TodoUpdate(BaseModel):
    text: Optional[str] = None
    priority: Optional[str] = None

class Todo(TodoBase):
    id: int
    
    class Config:
        from_attributes = True