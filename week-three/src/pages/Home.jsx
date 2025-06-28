import React from 'react';
import Card from '../components/Card';
import TaskManager from '../components/TaskManager';
import Posts from '../components/Posts';

export default function Home() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome Home 😊</h1>
            
            <Card 
                title="Task Manager"
                content={<TaskManager />}
                className="mb-4"
            />
            <Posts />
            <p className="text-gray-700 mt-4">
                We are excited to have you here and hope you enjoy using our app!
            </p>
        </div>
    );
}