"use client";

import React, {useState} from 'react';
import Burger from "@pedaki/common/ui/burger";

const Navigation = () => {

    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/*Desktop navigation*/}
            <div className="hidden lg:flex">

            </div>

            {/* Mobile burger */}
            <div className="flex lg:hidden">
                <Burger onClick={() => setMobileOpen(!mobileOpen)} active={mobileOpen}/>
            </div>
            {/* Mobile navigation */}

        </>
    );
};

export default Navigation;