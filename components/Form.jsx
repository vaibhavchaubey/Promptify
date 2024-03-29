import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex items-center	flex-col'>
      <h1 className='head_text text-left'>
        <span className='head_text_gradient'>{type} Prompt</span>
      </h1>
      <p className='desc text-center max-w-md'>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-poppins font-medium text-base text-primary-black'>
            Write AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your prompt here'
            required
            className='form_textarea'
          />
        </label>

        <label>
          <span className='font-poppins font-medium text-base text-primary-black'>
            Tag of Prompt{" "}
            <span className='font-normal text-[13px]'>
              [#designing, #engineering, #placement, etc.]
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>
        {/* <label>
          <span className='font-poppins font-semibold text-base text-primary-black'>
            Platform{" "}
          </span>
          <input
            value={post.platform}
            onChange={(e) => setPost({ ...post, platform: e.target.value })}
            type='text'
            placeholder='Chat GPT, Bard, other'
            required
            className='form_input'
          />
        </label> */}

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='outline_btn'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='black_btn'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
