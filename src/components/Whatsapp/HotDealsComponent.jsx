
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, TrendingUp, TrendingDown, User, Clock } from 'lucide-react';

export function  HotColdDealsComponent ({ hotDeals,coldDeals }){
    const [activeTab, setActiveTab] = useState('hot');
        
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    const DealCard = ({ deal, type }) => (
        <motion.div
            className={`p-4 rounded-xl border transition-all duration-200 hover:shadow-lg ${
                type === 'hot' 
                    ? 'bg-red-900/20 border-red-700/50 hover:border-red-600' 
                    : 'bg-blue-900/20 border-blue-700/50 hover:border-blue-600'
            }`}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
        >
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        type === 'hot' ? 'bg-red-600/20' : 'bg-blue-600/20'
                    }`}>
                        <User className={`w-5 h-5 ${
                            type === 'hot' ? 'text-red-400' : 'text-blue-400'
                        }`} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-100">{deal.name}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                            {type === 'hot' ? (
                                <TrendingUp className="w-4 h-4 text-red-400" />
                            ) : (
                                <TrendingDown className="w-4 h-4 text-blue-400" />
                            )}
                            <span className={`text-xs font-medium ${
                                type === 'hot' ? 'text-red-400' : 'text-blue-400'
                            }`}>
                                {deal.leadScore}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-1">
                    {deal.whatsapp === 'Yes' && (
                        <div className="w-2 h-2 bg-green-500 rounded-full" title="WhatsApp Available"></div>
                    )}
                    {deal.linkedin === 'Yes' && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full" title="LinkedIn Available"></div>
                    )}
                </div>
            </div>

            <div className="space-y-2 mb-3">
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <MessageSquare className="w-4 h-4 text-gray-400" />
                    <span className="truncate">{deal.summary}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{deal.email}</span>
                </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                <button className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    type === 'hot' 
                        ? 'bg-red-600/20 text-red-300 hover:bg-red-600/30' 
                        : 'bg-blue-600/20 text-blue-300 hover:bg-blue-600/30'
                }`}>
                    Contact
                </button>
                
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>Recent</span>
                </div>
            </div>
        </motion.div>
    );

    return (
        <motion.div
            className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-100">🎯 Priority Deals</h3>
                <div className="flex items-center space-x-1 bg-gray-700/50 rounded-lg p-1">
                    <button
                        onClick={() => setActiveTab('hot')}
                        className={`px-4 py-2 text-sm rounded-md transition-all ${
                            activeTab === 'hot'
                                ? 'bg-red-600 text-white shadow-md'
                                : 'text-gray-400 hover:text-gray-200'
                        }`}
                    >
                        🔥 Hot ({hotDeals.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('cold')}
                        className={`px-4 py-2 text-sm rounded-md transition-all ${
                            activeTab === 'cold'
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'text-gray-400 hover:text-gray-200'
                        }`}
                    >
                        ❄️ Cold ({coldDeals.length})
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-4 max-h-96 overflow-y-auto">
                {activeTab === 'hot' ? (
                    hotDeals.length > 0 ? (
                        hotDeals.map((deal, index) => (
                            <DealCard key={`hot-${index}`} deal={deal} type="hot" />
                        ))
                    ) : (
                        <div className="text-center py-8 text-gray-400">
                            <TrendingUp className="w-8 h-8 mx-auto mb-2 opacity-50" />
                            <p>No hot deals available</p>
                        </div>
                    )
                ) : (
                    coldDeals.length > 0 ? (
                        coldDeals.map((deal, index) => (
                            <DealCard key={`cold-${index}`} deal={deal} type="cold" />
                        ))
                    ) : (
                        <div className="text-center py-8 text-gray-400">
                            <TrendingDown className="w-8 h-8 mx-auto mb-2 opacity-50" />
                            <p>No cold deals available</p>
                        </div>
                    )
                )}
            </div>

            {/* Footer Summary */}
            <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center text-sm text-gray-400">
                <span>
                    Showing top {activeTab === 'hot' ? hotDeals.length : coldDeals.length} {activeTab} deals
                </span>
                <span className="text-xs">
                    {activeTab === 'hot' ? '🔥 High Priority' : '❄️ Needs Attention'}
                </span>
            </div>
        </motion.div>
    );
};