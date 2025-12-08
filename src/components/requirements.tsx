import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IRequirement {
  name: string;
  description: string;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IGatherRequirementsForm>();

  const onSubmit: SubmitHandler<IGatherRequirementsForm> = (data) => {
    setLoading(true);
    setError(null);

    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      setLoading(false);
      reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          {...register("requirements[0].name", { required: "This field is required." })}
          className={twMerge('mt-1 block w-full rounded-md shadow-sm', errors?.['requirements'][0]?.name && 'border-red-300')}
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          {...register("requirements[0].description", { required: "This field is required." })}
          rows={3}
          className={twMerge('mt-1 block w-full rounded-md shadow-sm', errors?.['requirements'][0]?.description && 'border-red-300')}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={twMerge("inline-flex items-center px-4 py-2 mt-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", loading && "opacity-50")}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface IRequirement {
  name: string;
  description: string;
}

interface IGatherRequirementsForm {
  requirements: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IGatherRequirementsForm>();

  const onSubmit: SubmitHandler<IGatherRequirementsForm> = (data) => {
    setLoading(true);
    setError(null);

    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      setLoading(false);
      reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          {...register("requirements[0].name", { required: "This field is required." })}
          className={twMerge('mt-1 block w-full rounded-md shadow-sm', errors?.['requirements'][0]?.name && 'border-red-300')}
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          {...register("requirements[0].description", { required: "This field is required." })}
          rows={3}
          className={twMerge('mt-1 block w-full rounded-md shadow-sm', errors?.['requirements'][0]?.description && 'border-red-300')}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={twMerge("inline-flex items-center px-4 py-2 mt-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500", loading && "opacity-50")}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;