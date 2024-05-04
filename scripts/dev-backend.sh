#!/bin/bash

cd backend
pdm run uvicorn todo_project_name.main:app --reload
