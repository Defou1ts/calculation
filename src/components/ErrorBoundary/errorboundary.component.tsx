import React from 'react';
import type { ReactNode } from 'react';

import { ErrorWrapper } from './styled';

import type { ErrorBoundaryProps } from './interfaces';

interface ErrorState {
	error: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);

		this.state = {
			error: false,
		};
	}

	static getDerivedStateFromError(): ErrorState {
		return { error: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.log(error);
		console.log(errorInfo.componentStack);
	}

	render(): ReactNode {
		if (this.state.error) {
			return (
				<ErrorWrapper>
					<h1>Произошла ошибка</h1>
				</ErrorWrapper>
			);
		}

		return this.props.children;
	}
}
