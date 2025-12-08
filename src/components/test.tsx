import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assume this is a GraphQL mutation for creating tests

interface Test {
  id: string;
  title: string;
  description: string;
}

interface WriteTestFormInputs {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState } = useForm<WriteTestFormInputs>();
  const [createTest] = useMutation(CREATE_TEST);

  const onSubmit: SubmitHandler<WriteTestFormInputs> = async (data) => {
    try {
      setLoading(true);
      await createTest({
        variables: { input: data },
      });
      reset();
    } catch (error) {
      console.error('Failed to create test:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Write Test Form" role="form">
        <input
          type="text"
          placeholder="Title"
          {...register('title', { required: true })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
          aria-label="Test Title"
        />
        <textarea
          rows={4}
          placeholder="Description"
          {...register('description', { required: true })}
          className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
          aria-label="Test Description"
        />
        <button
          type="submit"
          disabled={loading || formState.isSubmitting}
          className={`mt-4 w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 ${formState.isSubmitting ? 'opacity-70' : ''}`}
          aria-label="Submit Test Form"
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assume this is a GraphQL mutation for creating tests

interface Test {
  id: string;
  title: string;
  description: string;
}

interface WriteTestFormInputs {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState } = useForm<WriteTestFormInputs>();
  const [createTest] = useMutation(CREATE_TEST);

  const onSubmit: SubmitHandler<WriteTestFormInputs> = async (data) => {
    try {
      setLoading(true);
      await createTest({
        variables: { input: data },
      });
      reset();
    } catch (error) {
      console.error('Failed to create test:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Write Test Form" role="form">
        <input
          type="text"
          placeholder="Title"
          {...register('title', { required: true })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
          aria-label="Test Title"
        />
        <textarea
          rows={4}
          placeholder="Description"
          {...register('description', { required: true })}
          className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
          aria-label="Test Description"
        />
        <button
          type="submit"
          disabled={loading || formState.isSubmitting}
          className={`mt-4 w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 ${formState.isSubmitting ? 'opacity-70' : ''}`}
          aria-label="Submit Test Form"
        >
          {loading ? 'Creating...' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;