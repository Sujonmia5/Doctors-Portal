import React from 'react';

const Review = () => {
    return (
        <div className=" text-accent p-6 mx-auto rounded-md shadow-2xl">
            <div className="p-4 space-y-2 text-sm">
                <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
            </div>
            <div className="flex space-x-4">
                <div>
                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                </div>
                <div>
                    <h4 className="font-bold">Leroy Jenkins</h4>
                    <span className="text-xs dark:text-gray-400">2 days ago</span>
                </div>
            </div>
        </div>
    );
};

export default Review;